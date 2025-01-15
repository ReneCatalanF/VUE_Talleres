import ItemTask from '@/models/ItemTask';
import moment from 'moment';

export default class TaskList {
    id!: number;
    nombre!: string;
    color!: string;
    visible!: boolean;
    fecha:moment.Moment=moment();
    tasks!: ItemTask[];
}