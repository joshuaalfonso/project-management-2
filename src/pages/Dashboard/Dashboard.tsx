import { Chart, useChart } from "@chakra-ui/charts"
import { Box, Grid, Heading, Text } from "@chakra-ui/react"
import { Bar, BarChart, CartesianGrid, LabelList, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"




const Dashboard = () => {

  const chart3 = useChart({
    data: [
      { value: 10 },
      { value: 16 },
      { value: 19 },
      { value: 15 },
      { value: 12 },
      { value: 15 },
      { value: 10 },
      { value: 18 },
    ],
    series: [{ name: "value", color: "teal.solid" }],
  })

  const chart = useChart({
    data: [
      { allocation: 60, type: "Stock" },
      { allocation: 45, type: "Crypto" },
      { allocation: 12, type: "ETF" },
      { allocation: 4, type: "Cash" },
    ],
    series: [{ name: "allocation", color: "teal.solid" }],
  })

  const chart2 = useChart({
    data: [
      { windows: 186, mac: 80, linux: 120, month: "January" },
      { windows: 165, mac: 95, linux: 110, month: "February" },
      { windows: 190, mac: 87, linux: 125, month: "March" },
      { windows: 195, mac: 88, linux: 130, month: "May" },
    ],
    series: [
      { name: "windows", color: "teal.solid" },
      { name: "mac", color: "purple.solid" },
      { name: "linux", color: "blue.solid" },
    ],
  })

  return (
    <>
      <Heading mb={'10'}>
        Dashboard
      </Heading>


      <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4">

        <Box
          borderWidth="1px"
          borderColor="border.disabled"
          rounded={'md'}
          px={'6'}
          py={'4'}
          _hover={{boxShadow: 'sm'}}
          className="flex items-center justify-between"
        >

          <div>
            <Heading size={'sm'} color={'fg.muted'}>
              Card 1
            </Heading>

            <Text fontSize={'3xl'} fontWeight={'medium'}>
              89
            </Text>
          </div>

          <Chart.Root width="28" height="12" chart={chart3}>
            <LineChart data={chart3.data}>
              {chart3.series.map((item) => (
                <Line
                  key={item.name}
                  isAnimationActive={false}
                  dataKey={chart3.key(item.name)}
                  stroke={chart3.color(item.color)}
                  strokeWidth={2}
                  dot={false}
                />
              ))}
            </LineChart>
          </Chart.Root>
        </Box>
        <Box
          borderWidth="1px"
          borderColor="border.disabled"
          rounded={'md'}
          px={'6'}
          py={'4'}
          _hover={{boxShadow: 'sm'}}
          className="flex items-center justify-between"
        >

          <div>
            <Heading size={'sm'} color={'fg.muted'}>
              Card 1
            </Heading>

            <Text fontSize={'3xl'} fontWeight={'medium'}>
              89
            </Text>
          </div>

          <Chart.Root width="28" height="12" chart={chart3}>
            <LineChart data={chart3.data}>
              {chart3.series.map((item) => (
                <Line
                  key={item.name}
                  isAnimationActive={false}
                  dataKey={chart3.key(item.name)}
                  stroke={chart3.color(item.color)}
                  strokeWidth={2}
                  dot={false}
                />
              ))}
            </LineChart>
          </Chart.Root>
        </Box>
        <Box
          borderWidth="1px"
          borderColor="border.disabled"
          rounded={'md'}
          px={'6'}
          py={'4'}
          _hover={{boxShadow: 'sm'}}
          className="flex items-center justify-between"
        >

          <div>
            <Heading size={'sm'} color={'fg.muted'}>
              Card 1
            </Heading>

            <Text fontSize={'3xl'} fontWeight={'medium'}>
              89
            </Text>
          </div>

          <Chart.Root width="28" height="12" chart={chart3}>
            <LineChart data={chart3.data}>
              {chart3.series.map((item) => (
                <Line
                  key={item.name}
                  isAnimationActive={false}
                  dataKey={chart3.key(item.name)}
                  stroke={chart3.color(item.color)}
                  strokeWidth={2}
                  dot={false}
                />
              ))}
            </LineChart>
          </Chart.Root>
        </Box>
        <Box
          borderWidth="1px"
          borderColor="border.disabled"
          rounded={'md'}
          px={'6'}
          py={'4'}
          _hover={{boxShadow: 'sm'}}
          className="flex items-center justify-between"
        >

          <div>
            <Heading size={'sm'} color={'fg.muted'}>
              Card 1
            </Heading>

            <Text fontSize={'3xl'} fontWeight={'medium'}>
              89
            </Text>
          </div>

          <Chart.Root width="28" height="12" chart={chart3}>
            <LineChart data={chart3.data}>
              {chart3.series.map((item) => (
                <Line
                  key={item.name}
                  isAnimationActive={false}
                  dataKey={chart3.key(item.name)}
                  stroke={chart3.color(item.color)}
                  strokeWidth={2}
                  dot={false}
                />
              ))}
            </LineChart>
          </Chart.Root>
        </Box>

      </div>


      {/* <Grid templateColumns="repeat(2, 1fr)" gap="6">
        <Box 
          borderWidth="1px"
          borderColor="border.disabled"
          rounded={'md'}
          p={'8'}
        >
            <Chart.Root maxH="sm" chart={chart}>
              <BarChart data={chart.data}>
                <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
                <XAxis axisLine={false} tickLine={false} dataKey={chart.key("type")} />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 100]}
                  tickFormatter={(value) => `${value}%`}
                />
                {chart.series.map((item) => (
                  <Bar
                    key={item.name}
                    isAnimationActive={false}
                    dataKey={chart.key(item.name)}
                    fill={chart.color(item.color)}
                  />
                ))}
              </BarChart>
            </Chart.Root>
          
        </Box>
        <Box 
          borderWidth="1px"
          borderColor="border.disabled"
          rounded={'md'}
          p={'8'}
        >
            <Chart.Root maxH="md" chart={chart2}>
              <BarChart data={chart2.data}>
                <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
                <XAxis
                  axisLine={false}
                  tickLine={false}
                  dataKey={chart2.key("month")}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <Tooltip
                  cursor={{ fill: chart2.color("bg.muted") }}
                  animationDuration={100}
                  content={<Chart.Tooltip />}
                />
                <Legend content={<Chart.Legend />} />
                {chart2.series.map((item) => (
                  <Bar
                    isAnimationActive={false}
                    key={item.name}
                    dataKey={chart2.key(item.name)}
                    fill={chart2.color(item.color)}
                    stroke={chart2.color(item.color)}
                    stackId={item.stackId}
                  >
                    <LabelList
                      dataKey={chart2.key(item.name)}
                      position="top"
                      style={{ fontWeight: "600", fill: chart2.color("fg") }}
                    />
                  </Bar>
                ))}
              </BarChart>
            </Chart.Root>
          
        </Box>
      </Grid> */}
    
    </>
  )
}

export default Dashboard