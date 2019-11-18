/* 串`專業團隊`api 產生列表 */
(function() {
  new Vue({
    el: ".team_main",
    data: {
      list: []
    },
    created() {
      this.getList();
    },
    methods: {
      getList() {
        axios({
          method: "get",
          url: "https://derway.tw/admin/api/members"
        })
          .then(res => {
            var array = res.data.data.length > 0 ? res.data.data : [];
            this.list = [];
            array.forEach(obj => {
              this.list.push({
                id: obj.id,
                name: obj.name,
                education: obj.education,
                experience: obj.experience,
                position: obj.position,
                image: obj.filename
              });
            });
          })
          .catch(err => {
            alert("最新消息列表取得失敗！");
          });
      }
    }
  });
})();
