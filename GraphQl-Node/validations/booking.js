import moment from "node-moment";

export default {
  city: {
    in: ["body"],
    isLength: {
      errorMessage: "Please provide a city.",
      options: { min: 1 }
    }
  },
  hotel: {
    in: ["body"],
    isLength: {
      errorMessage: "Please provide a hotel.",
      options: { min: 1 }
    }
  },
  startDate:{
     // Custom validation for date check
     custom: {
      options: value => {
        if (!value){ 
            return false;
        }
        const startDate = moment(value);
        return startDate.isValid();
      }
    },
    errorMessage: "Please provide a valid start date."
  },
  endDate: {
    // Custom validation for date check
    custom: {
      options: value => {
        if (!value){ 
            return false;
        }
        const endDate = moment(value);
        return endDate.isValid();
      }
    },
    errorMessage: "Please provide a valid end date."
  }

};
