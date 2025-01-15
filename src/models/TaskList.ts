import ItemTask from '@/models/ItemTask';

export default class TaskList {
    id!: number;
    nombre!: string;
    color!: string;
    visible!: boolean;
    fecha!: string;
    tasks!: ItemTask[];
}