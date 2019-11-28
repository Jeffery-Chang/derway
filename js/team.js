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
              // 太長的加上class
              var edu = obj.education.length || 0;
              var exp = obj.experience.length || 0;
              var pos = obj.position.length || 0;
              this.list.push({
                id: obj.id,
                name: obj.name,
                education: obj.education,
                experience: obj.experience,
                position: obj.position,
                image: obj.filename,
                isLong: edu + exp + pos > 7
              });
            });
          })
          .catch(err => {
            alert("專業團隊列表取得失敗！");
          });
      }
    }
  });
})();
