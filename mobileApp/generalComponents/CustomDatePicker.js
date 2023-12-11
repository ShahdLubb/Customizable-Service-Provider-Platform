import React, { useState } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons/faCalendarDays";

const CustomDatePicker = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        setSelectedDate(date);
        hideDatePicker();
    };

    return (
        <View>
            <TextInput
                placeholder="1/1/2023"
                name="bd"
                value={selectedDate ? selectedDate.toLocaleDateString() : ""}
                editable={false} // make the TextInput uneditable
            />
            <TouchableOpacity onPress={showDatePicker}>
                <FontAwesomeIcon icon={faCalendarDays} size={30} />
            </TouchableOpacity>

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
};

export default CustomDatePicker;
