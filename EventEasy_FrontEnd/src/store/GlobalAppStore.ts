  interface ISessionStore {
    isAuthenticate?: boolean;
    userId?: number
  }

  interface IGlobalAppStore {
    sessionStore: ISessionStore;
  }
  
  export class GlobalAppStore {
    private applicationData: IGlobalAppStore = {
      sessionStore: {
        isAuthenticate: false,
        userId: undefined
      },
    };
    private static instance: GlobalAppStore;
  
    private constructor() {}
  
    static setInstance(instance: GlobalAppStore) {
      this.instance = instance;
    }
  
    static getInstance(): GlobalAppStore {
      if (!this.instance) {
        this.instance = new GlobalAppStore();
      }
      return this.instance;
    }
  
    getApplicationData() {
      return this.applicationData;
    }
  
    setIsAuthenticate(isAuthenticate: boolean) {
      this.applicationData.sessionStore.isAuthenticate = isAuthenticate;
    }
  
    getIsAuthenticate() {
      return this.applicationData.sessionStore.isAuthenticate;
    }

    setUserId(userId: number) {
      this.applicationData.sessionStore.userId = userId;
    }

    getUserId() {
      return this.applicationData.sessionStore.userId;
    }

    clearAllData() {
      this.applicationData = {
        sessionStore: {
            isAuthenticate: false
        }
      };
    }
  }
  
  export default GlobalAppStore;
  