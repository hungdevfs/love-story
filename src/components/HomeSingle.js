import React, { useState } from "react"
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import DatePicker from "react-native-neat-date-picker"

import Button from "./Button"
import { COLORS, FONTSIZES } from "../utils/constants"
import { formatDate } from "../utils/helpers"

const HomeSingle = ({
  partnerName,
  setPartnerName,
  startDate,
  setStartDate,
  onPress,
}) => {
  const [isOpenCalendar, setIsOpenCalendar] = useState(false)

  const onCancel = () => setIsOpenCalendar(false)

  const onConfirm = (date) => {
    setIsOpenCalendar(false)
    setStartDate(date)
  }

  return (
    <>
      <Text style={styles.suggestion}>
        You haven't had a partner. Pick one!
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Your partner username"
        value={partnerName}
        onChangeText={(value) => setPartnerName(value)}
      />
      {startDate ? (
        <Text style={styles.date}>
          Love start date: {formatDate(startDate)}
        </Text>
      ) : (
        <View style={styles.openCalendarBtn}>
          <TouchableOpacity onPress={() => setIsOpenCalendar(true)}>
            <Text style={styles.openCalendarBtnText}>Love start date</Text>
          </TouchableOpacity>
        </View>
      )}
      <DatePicker
        value={startDate}
        isVisible={isOpenCalendar}
        mode={"single"}
        maxDate={new Date()}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
      <Button backgroundColor={COLORS.RED} text="Match" onPress={onPress} />
    </>
  )
}

export default HomeSingle

const styles = StyleSheet.create({
  suggestion: {
    fontSize: FONTSIZES.BIG,
    fontWeight: "bold",
    color: COLORS.WHITE,
    marginBottom: 8,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: COLORS.LIGHT,
    marginBottom: 8,
  },
  date: {
    marginBottom: 8,
    color: COLORS.WHITE,
  },
  openCalendarBtn: {
    flexDirection: "row",
  },
  openCalendarBtnText: {
    marginBottom: 8,
    color: COLORS.WHITE,
    textDecorationLine: "underline",
  },
})
