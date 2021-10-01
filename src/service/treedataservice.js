const TreeLocationSampleData = []

// [{ uniqueId: 101, lat: 59.81921097726422, lng: 10.75191402715559, owner: 'Beckhan',  planteddate: '30 Sep 2021', 
//     title: 'LVM hackathone monument.',
//     story: 'This tree is planted as a monument for LVM hackathone.', imgUrl:'https://drive.google.com/uc?export=view&id=127Mrr3gd-1VGcU_JY5FYdnIQ2B8nBDPh' },
//     { uniqueId: 102, lat: 59.903306, lng: 10.757917 , owner: 'Geir Andersen',  planteddate: '30 Sep 2021', 
//     title: 'Oslo Losæter . Project no.1 Geir Andersen.',
//     story: 'This tree is planted as a monument for LVM hackathone in Oslo Losæter by Geir Andersen.', imgUrl:'https://drive.google.com/uc?export=view&id=127Mrr3gd-1VGcU_JY5FYdnIQ2B8nBDPh' }]
// [
// { uniqueId: 101, lat: 59.81921097726422, lng: 10.75191402715559, owner: 'Nithesh A N',  planteddate: '27 May 2018', story: 'Its a monument of our marriage, which shares the love story and happiness of our life', imgUrl:'' },
// { uniqueId: 102, lat: 59.71921097726422, lng: 10.75191402715559, owner: 'Armin', planteddate: '27 May 2018', story: 'For marking the happiness and joy of Armin\'s son\'s birthday' , imgUrl:'' },
// { uniqueId: 103, lat: 59.71921097726422, lng: 10.75191402715559, owner: 'Armin', planteddate: '27 May 2018', story: 'For marking the happiness and joy of Armin\'s son\'s birthday' , imgUrl:'' },
// { uniqueId: 104, lat: 58.91921097726422, lng: 10.75191402715559 , owner: 'Armin',  planteddate: '27 May 2018', story: 'For marking the happiness and joy of Armin\'s son\'s birthday', imgUrl:''},
// { uniqueId: 105, lat: 59.91921097726422, lng: 10.95191402715559 , owner: 'Armin',  planteddate: '27 May 2018', story: 'For marking the happiness and joy of Armin\'s son\'s birthday', imgUrl:''},
// { uniqueId: 106, lat: 59.92921097726422, lng: 10.71191402715559 , owner: 'John ',  planteddate: '27 May 2018', story: 'This tree is the living memory of one of the friend.', imgUrl:''},
// { uniqueId: 107, lat: 59.91921097726422, lng: 10.72191402715559, owner: 'Lagertha ',  planteddate: '27 May 2018', story: 'The shieldmaide greatest of all time in viking era.' , imgUrl:''},
// { uniqueId: 108, lat: 59.94921097726422, lng: 10.75191402715559 , owner: 'Bjorn',  planteddate: '27 May 2018', story: 'The king and legend Bjorn ironside.', imgUrl:''},
// { uniqueId: 109, lat: 59.92821097726422, lng: 10.75191402715559 , owner: 'Bjorn',  planteddate: '27 May 2018', story: 'The king and legend Bjorn ironside.', imgUrl:''},
// { uniqueId: 110, lat: 59.81921097726422, lng: 10.85191402715559 , owner: 'Ragnor',  planteddate: '27 May 2018', story: 'The gretest Viking king of all time.', imgUrl:''}
// ]

// export const GetAllTree = () => {
//     return TreeLocationSampleData;
// }

class TreeDataService {
    constructor() {
        if(!localStorage.getItem('treedata')){
            localStorage.setItem('treedata', JSON.stringify({data: TreeLocationSampleData}))
        }
    }

    getAllTree () {
        return  JSON.parse(localStorage.getItem('treedata')).data;
    }

    addNewTree (treedata) {
        const data =  JSON.parse(localStorage.getItem('treedata')).data;
        data.push(treedata);
        localStorage.setItem('treedata', JSON.stringify({data: data}))
        return data;
    }

    getNextId() {
        const data =  JSON.parse(localStorage.getItem('treedata')).data;
        return 101 + data.length;
    }
}

const treeDataService = new TreeDataService()
export default treeDataService;