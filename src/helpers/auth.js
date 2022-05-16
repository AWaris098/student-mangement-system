module.exports = {
  ensureAuthenticated: async (req, res, next) => {
    try {
      if (req.isAuthenticated) {
        return await next();
      }
    } catch (error) {
      // res.json(error)
      console.log(error);
    }
  },
  isAdmin : async (req, res, next) => {
   try{
    if(req.user.isAdmin == true){
      return await next()
    }
   }catch(e){
     console.log(e)
   }
  },
  isLoggedIn: async (req, res, next) => {
    try {
      if (!req.isAuthenticated) {
        return await next();
      }
    } catch (error) {
      // res.json(error)
      console.log(error);
    }
  },
  readAccessControl: async (req, res, next) => {
    try {
      if (req.user.privileges.read == true) {
        return await next();
      }
    } catch (error) {
      console.log(error);
    }
  },
  creatAccessControl: async (req, res, next) => {
    try {
      if (req.user.privileges.creat == true) {
        return await next();
      }
    } catch (error) {
      console.log(error);
    }
  },
  updateAccessControl: async (req, res, next) => {
    try {
      if (req.user.privileges.update) {
        return await next();
      }
    } catch (error) {
      console.log(error);
    }
  },
  deleteAccessControl: async (req, res, next) => {
    try {
      if (req.user.privileges.delete) {
        return await next();
      }
    } catch (error) {
      console.log(error);
    }
  },
};
