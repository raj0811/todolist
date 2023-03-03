const taskdata=[];

module.exports.home=function(req,res){

    let total = taskdata.length
    
    return res.render('home',{
        title: "homepage",
        task_data:taskdata,
        total_task:total
    })
}

module.exports.add=function(req,res){
    taskdata.push({
        task:req.body.task
    })

    console.log(taskdata);
    return res.redirect('back')
}

module.exports.del=function(req,res){
    let id=req.query.id;
    let taskdelete=req.query.taskdel;
    console.log(taskdelete," deleted");
    let taskIndex=taskdata.findIndex(taskd => taskd.task==taskdelete);
    // console.log(taskd.task,"jhgjj");
  
    if(taskIndex != -1){
        taskdata.splice(taskIndex,1)
    }

    req.flash('success','task deleted');
    return res.redirect('back')
}

module.exports.delall=function(req,res){
    if(taskdata.length !=0){
        taskdata.splice(0,taskdata.length)
        req.flash('sucess','All task deleted');
    }
   
    return res.redirect('back')
}