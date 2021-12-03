<script>
  function get_pmkey(){
    let vars = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value){
      vars[key] = value;
    });
    return vars;
  };

  document.cookie = "pmkey=" + get_pmkey()["pmkey"] + ";max-age=" + 365*24*60*60; 
</script>