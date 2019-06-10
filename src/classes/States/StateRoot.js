import IState from '../IState';

class StateRoot extends IState {
    GetName() {
        return 'StateRoot';
    }

    MessageInit(msg , context) {
        
    }
}

export default StateRoot;
