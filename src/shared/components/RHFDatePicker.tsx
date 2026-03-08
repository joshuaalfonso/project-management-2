import { Controller } from "react-hook-form"
import { DatePicker, Field, Portal, Text } from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"
import { parseDate } from "@internationalized/date"

interface RHFDatePickerProps {
  name: string
  control: any
  label?: string
  rules?: any
  errors?: any
  placeholder?: string
}

export default function RHFDatePicker({
  name,
  control,
  label,
  rules,
  errors,
  placeholder = "Select date",
}: RHFDatePickerProps) {
  const error = errors?.[name]

  return (
    <Field.Root invalid={!!error}>
      {label && <Field.Label>{label}</Field.Label>}

      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <DatePicker.Root
            value={field.value ? [parseDate(field.value)] : []}
            onValueChange={(e) =>
              field.onChange(e.value[0]?.toString() ?? "")
            }
          >
            <DatePicker.Control>
              <DatePicker.Input placeholder={placeholder} />
              <DatePicker.IndicatorGroup>
                <DatePicker.Trigger>
                  <LuCalendar />
                </DatePicker.Trigger>
              </DatePicker.IndicatorGroup>
            </DatePicker.Control>

            <Portal>
              <DatePicker.Positioner>
                <DatePicker.Content>
                  <DatePicker.View view="day">
                    <DatePicker.Header />
                    <DatePicker.DayTable />
                  </DatePicker.View>

                  <DatePicker.View view="month">
                    <DatePicker.Header />
                    <DatePicker.MonthTable />
                  </DatePicker.View>

                  <DatePicker.View view="year">
                    <DatePicker.Header />
                    <DatePicker.YearTable />
                  </DatePicker.View>
                </DatePicker.Content>
              </DatePicker.Positioner>
            </Portal>
          </DatePicker.Root>
        )}
      />

      {error && (
        <Text color="fg.error" fontSize="sm">
          {error.message}
        </Text>
      )}
    </Field.Root>
  )
}