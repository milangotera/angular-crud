/**
 * 
 * @fileoverview NgbdSortableHeader
 *
 * @version 1.0
 *
 * @author Milan Gotera <milangotera@gmail.com>
 *
*/

import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../models/employee';

export type SortColumn = keyof Employee | '';
export type SortDirection = 'asc' | 'desc' | '';

const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

export interface SortEvent {
    column: SortColumn;
    direction: SortDirection;
}

@Directive({
    selector: 'th[sortable]',
    host: {
        '[class.asc]': 'direction === "asc"',
        '[class.desc]': 'direction === "desc"',
        '(click)': 'rotate()'
    }
})
export class NgbdSortableHeader {

    @Input() sortable: SortColumn = '';
    @Input() direction: SortDirection = '';
    @Output() sort = new EventEmitter<SortEvent>();

    rotate() {
        this.direction = rotate[this.direction];
        this.sort.emit({column: this.sortable, direction: this.direction});
    }
}