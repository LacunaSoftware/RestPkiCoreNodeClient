class SessionCompletionStatus{

    constructor(model){

      this._completed = model['completed'];
      this._progress  = model['progress'];

    }

    get completed() {
        return this._completed;
    }
    
    get progress() {
        return this._progress;
    }
}