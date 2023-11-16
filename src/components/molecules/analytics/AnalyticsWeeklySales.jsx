// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { hexToRGBA } from '../../../utils/hex-to-rgba'
import OptionsMenu from '../../organisms/Navbar/option-menu/OptionsMenu'
import AvatarComp from '../../atoms/icons/avatar/AvatarComp'
import IconifyIcon from '../../atoms/icons/IconifyIcon'
import ReactApexcharts from 'react-apexcharts'


const series = [
  {
    type: 'column',
    name: 'Earning',
    data: [90, 52, 67, 45, 75, 55, 48]
  },
  {
    type: 'column',
    name: 'Expense',
    data: [-53, -29, -67, -84, -60, -40, -77]
  },
  {
    type: 'line',
    name: 'Expense',
    data: [73, 20, 50, -20, 58, 15, 31]
  }
]

const AnalyticsWeeklySales = () => {
  // ** Hook
  const theme = useTheme()

  const options = {
    chart: {
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: '57%',
        endingShape: 'flat',
        startingShape: 'rounded'
      }
    },
    markers: {
      size: 4,
      strokeWidth: 3,
      fillOpacity: 1,
      strokeOpacity: 1,
      colors: [theme.palette.background.paper],
      strokeColors: hexToRGBA(theme.palette.warning.main, 1)
    },
    stroke: {
      curve: 'smooth',
      width: [0, 0, 3],
      colors: [hexToRGBA(theme.palette.warning.main, 1)]
    },
    colors: [hexToRGBA(theme.palette.primary.main, 1), hexToRGBA(theme.palette.primary.main, 0.12)],
    dataLabels: { enabled: false },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    legend: { show: false },
    grid: {
      yaxis: {
        lines: { show: false }
      },
      padding: {
        top: -28,
        left: -6,
        right: -8,
        bottom: -5
      }
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      labels: {
        style: { colors: theme.palette.text.disabled }
      }
    },
    yaxis: {
      max: 100,
      min: -90,
      show: false
    }
  }

  return (
    <Card>
      <CardHeader
        title='Weekly Sales'
        subheader='Total 85.4k Sales'
        subheaderTypographyProps={{ sx: { lineHeight: 1.429 } }}
        titleTypographyProps={{ sx: { letterSpacing: '0.15px' } }}
        action={
          <OptionsMenu
            options={['Refresh', 'Edit', 'Share']}
            iconButtonProps={{ size: 'small', className: 'card-more-options' }}
          />
        }
      />
      <CardContent
        sx={{
          '& .apexcharts-series[rel="2"]': { transform: 'translateY(-8px)' },
          pt: { xs: `${theme.spacing(0)} !important`, md: `${theme.spacing(2.5)} !important` }
        }}
      >
        <Grid container sx={{ mb: [4, 4, 7.25] }}>
          <Grid item xs={6}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AvatarComp skin='light' sx={{ mr: 4 }} variant='rounded'>
                <IconifyIcon icon='mdi:trending-up' />
              </AvatarComp>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='caption'>Net Income</Typography>
                <Typography sx={{ fontWeight: 600 }}>$438.5k</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AvatarComp skin='light' sx={{ mr: 4 }} color='warning' variant='rounded'>
                <IconifyIcon icon='mdi:currency-usd' />
              </AvatarComp>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='caption'>Expense</Typography>
                <Typography sx={{ fontWeight: 600 }}>$22.4k</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <ReactApexcharts type='line' height={251} series={series} options={options} />
      </CardContent>
    </Card>
  )
}

export default AnalyticsWeeklySales
