function load_data(){
    $.ajax({
        type:"GET",
        url :ENDPOINT+"/weather",
        success:function(res){
            $('#weather_info').text(res["result"][0]+" "+res["result"][3]+" "+res["result"][1]+"℃ "+res["result"][2]+"%");
        },
        fail:function(err){
            console.log(err);
        }
    })
}
load_data();
