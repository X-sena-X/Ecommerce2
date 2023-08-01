const products = [
    {
        id: 'AZ10001',
        category: 'footwear',
        mainUrl: 'https://i.imgur.com/kVjhO80.png',
        images: {
            url1: 'https://i.imgur.com/1uqCvnK.png',
            url2: 'https://i.imgur.com/gfhIrWJ.png',
            url3: 'https://i.imgur.com/b6T9sFn.png',
            url4: ''
        },
        title:{
            shortTitle: 'Nike Jordan Air ',
            longTitle: 'Air Jordan 1 Mid Hyper Royal'
        },
        price: '$129',
        description:'',
        tagline:''
    },
    {
        id: 'AZ10002',
        category: 'footwear',
        mainUrl: 'https://i.imgur.com/8kS1elt.png',
        images: {
            url1: 'https://i.imgur.com/gawSeaW.png',
            url2: 'https://i.imgur.com/bbkPREr.png',
            url3: 'https://i.imgur.com/fGxquCl.png',
            url4: ''
        },
        title:{
            shortTitle: 'Air Jordan 1',
            longTitle: 'Air Jordan 1 Retro High OG Patent Bred 555088-063'
        },
        price: '$129',
        description:'',
        tagline:''
    },
    {
        id: 'AZ10003',
        category: 'footwear',
        mainUrl: 'https://i.imgur.com/DIkhZL0.png',
        images: {
            url1: 'https://i.imgur.com/LuE088N.png',
            url2: 'https://i.imgur.com/rCFMeEV.png',
            url3: 'https://i.imgur.com/s8N6gee.png',
            url4: ''
        },
        title:{
            shortTitle: 'Nike jordan',
            longTitle: 'Spiderman'
        },
        price: '$129',
        description:'',
        tagline:''
    },
    {
        id: 'AZ10004',
        category: 'footwear',
        mainUrl: 'https://i.imgur.com/PcDMKam.png',
        images: {
            url1: 'https://i.imgur.com/dBIetyW.png',
            url2: 'https://i.imgur.com/HhW5mQq.png',
            url3: 'https://i.imgur.com/k5WE46t.png',
            url4: ''
        },
        title:{
            shortTitle: 'Air Jordan 1 Retro High',
            longTitle: 'Air Jordan 1 Retro High OG ‘University Blue’ 555088-134'
        },
        price: '$129',
        description:'',
        tagline:''
    },
    {
        id: 'AZ10005',
        category: 'footwear',
        mainUrl: 'https://i.imgur.com/dxuQEc2.png',
        images: {
            url1: 'https://i.imgur.com/LvHb8NP.png',
            url2: 'https://i.imgur.com/Rx9MSBp.png',
            url3: 'https://i.imgur.com/k1A7gRm.png',
            url4: ''
        },
        title:{
            shortTitle: 'Air Jordan 1 Mid SE ',
            longTitle: 'Air Jordan 1 Mid SE PS `Diamond` '
        },
        price: '$129',
        description:'',
        tagline:''
    },
    {
        id: 'AZ10006',
        category: 'footwear',
        mainUrl: 'https://i.imgur.com/U841Ag8.png',
        images: {
            url1: 'https://i.imgur.com/QYRtWXN.png',
            url2: 'https://i.imgur.com/ZnQuwMB.png',
            url3: '',
            url4: ''
        },
        title:{
            shortTitle: 'Air Jordan 13',
            longTitle: 'Air Jordan 13 Retro Black University Red Flint Grey White DJ5982-060'
        },
        price: '$129',
        description:'',
        tagline:''
    },
    {
        id: 'AZ10007',
        category: 'footwear',
        mainUrl: 'https://i.imgur.com/KmxP0HP.png',
        images: {
            url1: 'https://i.imgur.com/vqjT7jH.png',
            url2: 'https://i.imgur.com/hKCH2Zt.png',
            url3: 'https://i.imgur.com/9Q4723b.png',
            url4: ''
        },
        title:{
            shortTitle: 'Air Jordan 1 Mid',
            longTitle: 'Air Jordan 1 Mid WMNS “Light Violet”'
        },
        price: '$129',
        description:'',
        tagline:''
    },
    {
        id: 'AZ10008',
        category: 'footwear',
        mainUrl: 'https://i.imgur.com/s7eLXGB.png',
        images: {
            url1: 'https://i.imgur.com/B9rZnXE.png',
            url2: 'https://i.imgur.com/waWftVs.png',
            url3: 'https://i.imgur.com/1HdbIs7.png',
            url4: ''
        },
        title:{
            shortTitle: 'Puma',
            longTitle: 'RS-X Tracks'
        },
        price: '$129',
        description:'',
        tagline:''
    },
    {
        id: 'AZ10009',
        category: 'footwear',
        mainUrl: 'https://i.imgur.com/5NIorUQ.png',
        images: {
            url1: 'https://i.imgur.com/wEhIZhu.png',
            url2: 'https://i.imgur.com/erSmWA4.png',
            url3: '',
            url4: ''
        },
        title:{
            shortTitle: 'PUMA',
            longTitle: 'PUMA Slipstream Low Retro Teams Yellow Blue 387207-02'
        },
        price: '$129',
        description:'',
        tagline:''
    },
    {
        id: 'AZ10010',
        category: 'footwear',
        mainUrl: 'https://i.imgur.com/6aJLe9T.png',
        images: {
            url1: 'https://i.imgur.com/WZazrXS.png',
            url2: 'https://i.imgur.com/SHzjiyt.png',
            url3: 'https://i.imgur.com/iAp5lcb.png',
            url4: ''
        },
        title:{
            shortTitle: 'PUMA ',
            longTitle: ' PUMA MB.01 Queen City 376886-10'
        },
        price: '$129',
        description:'',
        tagline:''
    },
    {
        id: 'AZ10011',
        category: 'footwear',
        mainUrl: 'https://i.imgur.com/XePLw7Q.png',
        images: {
            url1: 'https://i.imgur.com/xsRLs7N.png',
            url2: 'https://i.imgur.com/OACBvVh.png',
            url3: 'https://i.imgur.com/lYSP07K.png',
            url4: ''
        },
        title:{
            shortTitle: 'PUMA',
            longTitle: 'PUMA RS-X Toys Bonnie Blue 369449-08'
        },
        price: '$129',
        description:'',
        tagline:''
    },
    {
        id: 'AZ10012',
        category: 'footwear',
        mainUrl: 'https://i.imgur.com/BjiAcvj.png',
        images: {
            url1: 'https://i.imgur.com/b3NkZ1O.png',
            url2: 'https://i.imgur.com/DJncgfT.png',
            url3: 'https://i.imgur.com/BR9v4w6.png',
            url4: ''
        },
        title:{
            shortTitle: 'PUMA',
            longTitle: 'Puma RS-X Millennium 373236-03'
        },
        price: '$129',
        description:'',
        tagline:''
    },
    {
        id: 'AZ10013',
        category: 'footwear',
        mainUrl: 'https://i.imgur.com/iGBVKv8.png',
        images: {
            url1: 'https://i.imgur.com/gAegqFG.png',
            url2: 'https://i.imgur.com/1zusxSd.png',
            url3: 'https://i.imgur.com/fzThSF0.png',
            url4: ''
        },
        title:{
            shortTitle: 'Puma',
            longTitle: 'Puma Explore Nitro GTX 378024-01'
        },
        price: '$129',
        description:'',
        tagline:''
    },
    {
        id: 'AZ10014',
        category: 'footwear',
        mainUrl: 'https://i.imgur.com/DEJhXdA.png',
        images: {
            url1: 'https://i.imgur.com/ICULELH.png',
            url2: 'https://i.imgur.com/Haa1A0m.png',
            url3: 'https://i.imgur.com/L1HAkSU.png',
            url4: ''
        },
        title:{
            shortTitle: 'adidas',
            longTitle: 'adidas Dame 8 Battle Of The Bubble GY2770'
        },
        price: '$129',
        description:'',
        tagline:''
    },
    {
        id: 'AZ10015',
        category: 'footwear',
        mainUrl: 'https://i.imgur.com/peWQX6W.png',
        images: {
            url1: 'https://i.imgur.com/wcMZCIS.png',
            url2: 'https://i.imgur.com/biHmAJQ.png',
            url3: 'https://i.imgur.com/peWQX6W.png',
            url4: ''
        },
        title:{
            shortTitle: 'adidas',
            longTitle: 'adidas Pro Bounce 2018 BLACK Basketball'
        },
        price: '$129',
        description:'',
        tagline:''
    },
    {
        id: 'AZ10016',
        category: 'footwear',
        mainUrl: 'https://i.imgur.com/UfqBfe0.png',
        images: {
            url1: 'https://i.imgur.com/493bAsS.png',
            
        },
        title:{
            shortTitle: 'Adidas',
            longTitle: 'ADIDAS CLIMACOOL VENTO 3'
        },
        price: '$129',
        description:'',
        tagline:''
    }
]

/*

{
        id: 'AZ10017',
        category: 'footwear',
        mainUrl: '',
        images: {
            url1: '',
            url2: '',
            url3: '',
            url4: ''
        },
        title:{
            shortTitle: '',
            longTitle: ''
        },
        price: '$129',
        description:'',
        tagline:''
    },
*/