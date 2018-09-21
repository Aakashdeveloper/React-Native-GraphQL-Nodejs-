import React, { Component } from 'react';
import { View, Text,TouchableOpacity, TextInput} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {formatDateTime, saveReservation} from './api';
import styles from './assets/css/formStyles';

class ReservationForm extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <Text style={styles.headerText}>BOOK YOUR HOTEL
            </Text>
        ),
        headerTitleStyle: { alignSelf: 'center' },
    });
    state = {
        hotels : []
    }
    state = {
        city: '',
        hotel:'',
        startDate: '',
        endDate:''
    }
    handleAddPress = () => {
        saveReservation(this.state)
        this.props.navigation.navigate('Bookings')
       
    }

    handleChangeTitle = (value) => {
        this.setState({city: value});
    }
    handleChangeTitle1 = (value) => {
        this.setState({hotel: value});
    }
    
    handlestartDatePress = () => {
        
        this.setState({showstartDatePicker: true});
    }
    handlestartDatePicked = (startDate) => {
        this.setState({
            startDate,
        })

        this.handlestartDatePickerHide();
    }
    handlestartDatePickerHide = () => {
        this.setState({showstartDatePicker: false});
    }
    handleendDatePress = () => {
        
        this.setState({showendDatePicker: true});
    }
    handleendDatePicked = (endDate) => {
        this.setState({
            endDate,
        })

        this.handleendDatePickerHide();
    }
    handleendDatePickerHide = () => {
        this.setState({showendDatePicker: false});
    }
    render(){
        return(
            <View style={styles.maincontainer}>
                <View style={styles.fieldContainer}>
                    <Text style={styles.headingText}>Enter Booking Details</Text>
                    <TextInput
                        style={styles.text}
                        placeholder= "Enter City"
                        spellCheck= {false}
                        value= {this.state.city}
                        onChangeText= {this.handleChangeTitle}
                    />
                    <TextInput
                        style={styles.text}
                        placeholder= "Enter Hotel"
                        spellCheck= {false}
                        value= {this.state.hotel}
                        onChangeText= {this.handleChangeTitle1}
                    />
                    <TextInput style={styles.text} 
                        placeholder= "Check In"
                        spellCheck= {false}
                        value= {formatDateTime(this.state.startDate.toString())}
                        editable= {!this.state.showstartDatePicker}
                        onFocus = { this.handlestartDatePress }
                    />
                    <TextInput style={styles.text} 
                        placeholder= "Check Out"
                        spellCheck= {false}
                        value= {formatDateTime(this.state.endDate.toString())}
                        editable= {!this.state.showendDatePicker}
                        onFocus = { this.handleendDatePress }
                    />
                    <DateTimePicker
                        isVisible = { this.state.showstartDatePicker}
                        mode= "date"
                        onConfirm={this.handlestartDatePicked}
                        onCancel= {this.handlestartDatePickerHide}
                    />
                    <DateTimePicker
                        isVisible = { this.state.showendDatePicker}
                        mode= "date"
                        onConfirm={this.handleendDatePicked}
                        onCancel= {this.handleendDatePickerHide}
                    />
                    <TouchableOpacity style={styles.button}
                        onPress={this.handleAddPress}>
                    <Text style={styles.buttonText}>Confirm Booking</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelbutton}
                    onPress={() => this.props.navigation.navigate('List')}>
                    <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
                    
               
            </View>
        )
    }
}

export default ReservationForm;