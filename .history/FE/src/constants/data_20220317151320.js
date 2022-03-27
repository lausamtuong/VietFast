import images from "./images"

const data = {
    user: {
        name: 'Lam Tuong',
        img: images.avt,
        role: 'admin'
    },
    summary: [
        {
            title: 'Customer Visited',
            subtitle: 'Total Customer Visited',
            value: '3229',
            percent: 100
        },
        {
            title: 'Orders',
            subtitle: 'Total orders today',
            value: '12',
            percent: 49
        },
        {
            title: 'Revenue',
            subtitle: 'Total revenue today',
            value: '19.240.230.000 VND',
            percent: 38
        },
        {
            title: 'Sales',
            subtitle: 'Total Sales today',
            value: '1092',
            percent: 55
        }
    ],
    revenueSummary: {
        title: 'Revenue',
        value: '$678',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    overall: [
        {
            value: '300K',
            title: 'Orders'
        },
        {
            value: '9.876K',
            title: 'Customers'
        },
        {
            value: '1.234K',
            title: 'Products'
        },
        {
            value: '$5678',
            title: 'Revenue'
        }
    ],
    revenueByChannel: [
        {
            title: 'Direct',
            value: 70
        },
        {
            title: 'External search',
            value: 40
        },
        {
            title: 'Referal',
            value: 60
        },
        {
            title: 'Social',
            value: 30
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }
}

export default data