import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLBoolean
  } from 'graphql/type';
  
  import HotelMongo from '../../mongoose/hotel'
  
  /**
   * generate projection object for mongoose
   * @param  {Object} fieldASTs
   * @return {Project}
   */
  export function getProjection (fieldASTs) {
    return fieldASTs.fieldNodes[0].selectionSet.selections.reduce((projections, selection) => {
      projections[selection.name.value] = true;
      return projections;
    }, {});
  }
  
  var hotelType = new GraphQLObjectType({
    name: 'hotel',
    description: 'hotel item',
    fields: () => ({
      id: {
        type: (GraphQLInt),
        description: 'The id of the hotel.',
      },
      name: {
        type: GraphQLString,
        description: 'The name of the hotel.',
      },
      available: {
        type: (GraphQLInt),
        description: 'The available of the hotel.',
      },
      city: {
        type: GraphQLString,
        description: 'The city of the hotel.',
      },
      cover: {
        type: GraphQLString,
        description: 'The cover of the hotel.',
      },
    })
  });
  
  var Hotelschema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        hotel: {
          type: new GraphQLList(hotelType),
          args: {
            id: {
              name: 'id',
              type: (GraphQLInt)
            }
          },
          resolve: (root, {id}, source, fieldASTs) => {
            var projections = getProjection(fieldASTs);
            var foundItems = new Promise((resolve, reject) => {
                HotelMongo.find({id}, projections,(err, hotels) => {
                    err ? reject(err) : resolve(hotels)
                })
            })
  
            return foundItems
          }
        }
      }
    })
    
  });
  
  export default Hotelschema;
  
  