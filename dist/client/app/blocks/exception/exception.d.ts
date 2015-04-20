declare module blocks.exception {
    interface IException {
        catcher: (string) => (string) => void;
    }
    class Exception implements IException {
        private logger;
        static $inject: string[];
        constructor(logger: blocks.logger.Logger);
        catcher: (string) => (string) => void;
    }
}
