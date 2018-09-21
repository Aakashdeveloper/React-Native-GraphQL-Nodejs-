import moment from 'moment';
import Expo from 'expo';
import uuid from 'uuid';

const { manifest } = Expo.Constants;
const api = manifest.packagerOpts.dev
            ? manifest.debuggerHost.split(':').shift().concat(':3001')
            : 'productionurl.com'

const gUrl = `http://${api}/graphql?query={todo(itemId:2){itemId,city,hotel,startDate,cover}}`
const url = `http://${api}/graphqlhotels`;
const purl = `http://${api}/booking`;

export function getHotels(){
    return fetch(url)
    
    .then(response => response.json())
    .then(data => data.map(e => ({...e, endDate:e.endDate})))
}

export function saveReservation({city,hotel,startDate,endDate}){
    return fetch(purl, {
        method: 'POST',
        body: JSON.stringify({
            city,
            hotel,
            startDate,
            endDate,
            cover:'https://image.ibb.co/eDQQwe/holiday_Inn_New_York.jpg',
            id:uuid()
        }),
        headers: new Headers({
            'Content-Type':'application/json'
        })
    })
    .then(res => res.json())
    .catch(err => console.error(err));
}

export function getReservation(){
    return fetch(gUrl)
    .then(res => res.json())
    .then(data => data.data.todo.map(e => ({...e, startDate:e.startDate})))
}


export function formatDateTime(dateString){
    const parsed = moment(new Date(dateString));

    if(!parsed.isValid()){
        return dateString;
    }

    return parsed.format('D MMM YYYY');
}

export function formatDate(dateString){
    const parsed = moment(new Date(dateString));

    if(!parsed.isValid()){
        return dateString
    }

    return parsed.format('D MMM YYYY');
}


