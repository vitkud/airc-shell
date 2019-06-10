class ViewModuleContribution {
    constructor( props ) {
        const { name, data, code, path, app, methods } = props;

        this.name = name || null;
        this.data = data || null;
        this.code = code || null;
        this.path = path || null;
        this.app = app || null;
        this.methods = methods || [];
    }

    getName() {
        return this.name;
    }

    getCode() {
        return this.code;
    }

    invoke() {
        console.log(`Try load in ViewModuleContribution ${this.name}`);
        console.log(global.API);
        if (global.API && global.API.dispatch) {
            console.log('dispathcing');
            global.API.dispatch({
                type: 'view_change',
                payload: this.code
            });
        } else {
            throw new Error('global.API not initialized');
        }
    }

    load() {
        this.invoke();

        return {
            application: this.app,
            path: this.path,
            view: this.code
        };
    }
}

export default ViewModuleContribution;
