import axios from 'axios'
class API {
    async getDataList(dataName,pageNum,pageSize) {
        await axios.get("/",{
            params: {
                pageNum,
                pageSize
            }
        })
    }
    async delData(dataName,songId) {
        await axios.post("",{
            songId
        })
    }
    async adoptMusic(songId) {
        await axios.post("",{
            songId
        })
    }
    async addAnnonce(json) {
        await axios.post("",{
            json
        })
    } 
}

export default new API()