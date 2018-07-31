var appttt = angular.module("appModule");
appttt.factory("CrudService",['localStorageService',function(localStorageService) {
    var crudService = {};
	// Factory retorna valor especial (int, bool, etc)
      crudService.key = "angular-todoList";
      
      if(localStorageService.get(crudService.key)){
          crudService.users = localStorageService.get(crudService.key);
      }else{
          crudService.users = [];
      }
      crudService.add = function(user){
          user.status="false";
          crudService.users.push(user);
          crudService.refresh();
      }
      crudService.updateItem = function(user){
        var index=crudService.users.indexOf(user);
      
        var status= crudService.users[index].status;
         if(status == "true"){
            crudService.users[index].status="false";
         }
         else{
             crudService.users[index].status="true";
         }
         console.log(crudService.users);
         crudService.refresh();
         return crudService.users;
    }
      crudService.refresh = function(){
          localStorageService.set(crudService.key, crudService.users)
      }
      crudService.getAll = function(){
          return crudService.users;
      }

      crudService.removeItem = function(item){
        crudService.users = crudService.users.filter(function(it){
            return it !== item;
        });
        crudService.refresh();
        return crudService.getAll();
    }
      return crudService;
  }]);