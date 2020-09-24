<template>
  <div>
    <div id="columns" class="columns">
      <div class="column">
        <div id="facebook" class="card">
          <span class="facebook"><i class="fab fa-facebook-square"></i> </span>
          <span class="userName">@nathanf</span>
          <div class="followersBox">
            <span class="followers">1987</span>
            <span class="followersText">FOLLOWERS</span>
          </div>
          <div>
            <span class="upToday">
              <i class="fas fa-caret-up"></i>
              12 Today
            </span>
          </div>
        </div>
      </div>

      <div class="column">
        <div id="twitter" class="card">
          <span class="twitter"><i class="fab fa-twitter"></i> </span>
          <span class="userName">@nathanf</span>
          <div class="followersBox">
            <span class="followers">1044</span>
            <span class="followersText">FOLLOWERS</span>
          </div>
          <div>
            <span class="upToday">
              <i class="fas fa-caret-up"></i>
              99 Today
            </span>
          </div>
        </div>
      </div>

      <div class="column">
        <div id="instagram" class="card">
          <span ><img class="instagram" src="../assets/icon-instagram.svg" alt="instagram"> </span>
          <span class="userName">@realnathanf</span>
          <div class="followersBox">
            <span class="followers">11000</span>
            <span class="followersText">FOLLOWERS</span>
          </div>
          <div>
            <span class="upToday">
              <i class="fas fa-caret-up"></i>
              1099 Today
            </span>
          </div>
        </div>
      </div>

      <div class="column">
        <div id="youtube" class="card">
          <span class="youtube"><i class="fab fa-youtube"></i> </span>
          <span class="userName">Nathan F.</span>
          <div class="followersBox">
            <span class="followers">8239</span>
            <span class="followersText">SUBSCRIBERS</span>
          </div>
          <div>
            <span class="downToday">
              <i class="fas fa-caret-down"></i>
              144 Today
            </span>
          </div>
        </div>
      </div>

    </div>

    <div class="columns">
      <div class="column">
        <div class="card">
          <div class="top-row">
            <span class="box-label">Page Views</span>
            <span class="facebook"><i class="fab fa-facebook-square"></i> </span>
          </div>
          <div class="bottom-row">
            <span>87</span>
            <span class="upToday">
              <i class="fas fa-caret-up"></i>
              3%
            </span>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="top-row">
            <span class="box-label">Retweets</span>
            <span class="twitter"><i class="fab fa-twitter"></i> </span>
          </div>
          <div class="bottom-row">
            <span>117</span>
            <span class="upToday">
              <i class="fas fa-caret-up"></i>
              303%
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import smData from '../assets/smData.json'
export default {
  name: 'Dashboard',
  data () {
    return {
      smData: smData[0].profiles
    }
  }
}

</script>

<style scoped>
#columns {
  width: 90%;
  margin: 0 auto;
}

.card {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 250px;
  padding: 10px;
  margin: 10px;
  background-color: hsl(227, 47%, 96%);
}

#facebook {
  border-top: 10px solid hsl(208, 92%, 53%);
  padding: 10px;
}

.facebook {
  color: hsl(208, 92%, 53%);
}

#twitter {
  border-top: 10px solid hsl(203, 89%, 53%);
  padding: 10px;
}

.twitter {
  color: hsl(203, 89%, 53%);
}

#instagram {
  //border-top: 10px solid linear-gradient(#fdc468, #df4996);
  border-top: 10px solid #df4996;
  padding: 10px;
}

.instagram {
  width: 30px;
}

#youtube {
  border-top: 10px solid hsl(348, 97%, 39%);
  padding: 10px;
}

.youtube {
  color: hsl(348, 97%, 39%);
}

.userName {
  font-size: 0.9rem;
  padding: 0 10px;
  vertical-align: center;
}

.followersBox {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 10px;
}

.followers {
  font-size: 4rem;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
}

.followersText {
  letter-spacing: 5px;
  font-size: 0.9rem;
}

.upToday {
  color: green;
  font-size: 0.9rem;
}

.downToday {
  color: red;
  font-size: 0.9rem;
}

.box-label {
  font-size: 0.9rem;
  font-weight: bold;
}

</style>

//.instagram,
//.instagram:before {
//  background: -webkit-gradient(linear, left top, left bottom, from(#fdc468), to(#df4996));
//  -webkit-background-clip: text;
//  -webkit-text-fill-color: transparent;
//  display: initial;
//}
