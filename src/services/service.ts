import http, { APIStatus, APIResponse } from "../http-config";

class APIService {
    async get(ruta: string, id = "") {
        let dato = "";
        const resp = new APIResponse();
    
        if (id != "") {
            dato = "/" + id;
        }
    
        await http.get(ruta + dato)
            .then((respuesta) => {
                resp.status = respuesta.data.status;
                if (respuesta.data.status == APIStatus.OK) {
                    resp.respuesta = respuesta.data.data;
                } else {
                    if (respuesta.data.msg != null && respuesta.data.msg != "") {
                        resp.error = respuesta.data.msg;
                    }
                }
            }).catch((error) => {
                resp.status = APIStatus.ERR;
                resp.error = error.toString();
            });
        return resp;
    }
}

export default new APIService();