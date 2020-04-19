import { Subject, BehaviorSubject } from 'rxjs';

export class CdTreeNode {
  private initSubject = new BehaviorSubject<void>(null);
  private changesSubject = new Subject<void>();

  constructor(public name: string, public level: number) {}

  get onInit() {
    return this.initSubject.asObservable();
  }

  get onChanges() {
    return this.changesSubject.asObservable();
  }

  fireInit() {
    this.initSubject.next();
  }

  fireChanges() {
    this.changesSubject.next();
  }
}
