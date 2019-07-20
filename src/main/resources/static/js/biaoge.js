
layui.use('table', function(){
    var table = layui.table;

    table.render({
        elem: '#test'
        ,toolbar: '#toolbarDemo'
        ,title: '用户数据表'
        ,cols: [[ //标题栏
            {type: 'checkbox', fixed: 'left'}
            ,{field: 'id', title: 'ID', width: 80, sort: true}
            ,{field: 'username', title: '用户名', width: 120}
            ,{field: 'email', title: '邮箱', minWidth: 150}
            ,{field: 'sign', title: '签名', minWidth: 160}
            ,{field: 'sex', title: '性别', width: 80}
            ,{field: 'city', title: '城市', width: 100}
            ,{field: 'experience', title: '积分', width: 80, sort: true}
            ,{fixed:'right',title:'操作',toolbar: '#barDemo',width:150}
        ]]
        ,data: [{
            "id": "10001"
            ,"username": "杜甫"
            ,"email": "xianxin@layui.com"
            ,"sex": "男"
            ,"city": "浙江杭州"
            ,"sign": "人生恰似一场修行"
            ,"experience": "116"
            ,"ip": "192.168.0.8"
            ,"logins": "108"
            ,"joinTime": "2016-10-14"
        }, {
            "id": "10002"
            ,"username": "李白"
            ,"email": "xianxin@layui.com"
            ,"sex": "男"
            ,"city": "浙江杭州"
            ,"sign": "人生恰似一场修行"
            ,"experience": "12"
            ,"ip": "192.168.0.8"
            ,"logins": "106"
            ,"joinTime": "2016-10-14"

        }, {
            "id": "10003"
            ,"username": "王勃"
            ,"email": "xianxin@layui.com"
            ,"sex": "男"
            ,"city": "浙江杭州"
            ,"sign": "人生恰似一场修行"
            ,"experience": "65"
            ,"ip": "192.168.0.8"
            ,"logins": "106"
            ,"joinTime": "2016-10-14"
        }, {
            "id": "10004"
            ,"username": "贤心"
            ,"email": "xianxin@layui.com"
            ,"sex": "男"
            ,"city": "浙江杭州"
            ,"sign": "人生恰似一场修行"
            ,"experience": "666"
            ,"ip": "192.168.0.8"
            ,"logins": "106"
            ,"joinTime": "2016-10-14"
        }, {
            "id": "10005"
            ,"username": "贤心"
            ,"email": "xianxin@layui.com"
            ,"sex": "男"
            ,"city": "浙江杭州"
            ,"sign": "人生恰似一场修行"
            ,"experience": "86"
            ,"ip": "192.168.0.8"
            ,"logins": "106"
            ,"joinTime": "2016-10-14"
        }, {
            "id": "10006"
            ,"username": "贤心"
            ,"email": "xianxin@layui.com"
            ,"sex": "男"
            ,"city": "浙江杭州"
            ,"sign": "人生恰似一场修行"
            ,"experience": "12"
            ,"ip": "192.168.0.8"
            ,"logins": "106"
            ,"joinTime": "2016-10-14"
        }, {
            "id": "10007"
            ,"username": "贤心"
            ,"email": "xianxin@layui.com"
            ,"sex": "男"
            ,"city": "浙江杭州"
            ,"sign": "人生恰似一场修行"
            ,"experience": "16"
            ,"ip": "192.168.0.8"
            ,"logins": "106"
            ,"joinTime": "2016-10-14"
        }, {
            "id": "10008"
            ,"username": "贤心"
            ,"email": "xianxin@layui.com"
            ,"sex": "男"
            ,"city": "浙江杭州"
            ,"sign": "人生恰似一场修行"
            ,"experience": "106"
            ,"ip": "192.168.0.8"
            ,"logins": "106"
            ,"joinTime": "2016-10-14"
        }]
        //,skin: 'line' //表格风格
        ,even: true
        ,page: true //是否显示分页
        //,limits: [5, 7, 10]
        //,limit: 5 //每页默认显示的数量
    });

    //头工具栏事件
    table.on('toolbar(test)', function(obj){
        var checkStatus = table.checkStatus(obj.config.id);
        switch(obj.event){
            case 'getCheckData':
                var data = checkStatus.data;
                layer.alert(JSON.stringify(data));
                break;
            case 'getCheckLength':
                var data = checkStatus.data;
                layer.msg('选中了：'+ data.length + ' 个');
                break;
            case 'isAll':
                layer.msg(checkStatus.isAll ? '全选': '未全选');
                break;
        };
    });

    //监听行工具事件
    table.on('tool(test)', function(obj){
        var data = obj.data;

        if(obj.event === 'del'){
            layer.confirm('真的删除行么', function(index){
                obj.del();
                layer.close(index);
            });
        } else if(obj.event === 'edit'){
            layer.prompt({
                formType: 2
                ,value: data.username

            }, function(value, index){
                obj.update({
                    username: value
                });
                layer.close(index);
            });
            layer.prompt({
                formType: 2
                ,value: data.email

            }, function(value, index){
                obj.update({
                    email: value
                });
                layer.close(index);
            });
        }
    });
});
