import moment from 'moment';

export default class ItemTask {
    id!: number;
    texto!: string;
    fecha:moment.Moment=moment();
    caduca:moment.Moment=moment();
    terminada!: boolean;
    visible!: boolean;
}