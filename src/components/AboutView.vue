<template>
<div class="main-container">
    <div class="container-one">
        <div class="profile">
            <img src="../assets/jannikaseybold_klein.jpg" alt="">
            <h3>Name Here</h3>
            <p>Software Developer</p>
        </div>
        <div class="social-links">
            <div class="link">
                <a href="">
                    <img src="../assets/logo.png" alt="">
                    <h2>Github</h2>
                </a>
            </div>
            <div class="link">
                <a href="">
                    <img src="../assets/logo.png" alt="">
                    <h2>LinkedIn</h2>
                </a>
            </div>
            <div class="link">
                <a href="">
                    <img src="../assets/logo.png" alt="">
                    <h2>Substack</h2>
                </a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

.wrapper{
    display: flex;
    justify-content: center;
}
img {
    height: 20px;
}

.main-container {
    display: flex;
    flex-direction: row;
    background-color: #d896d8;
    border-radius: 25px;
    width: 60%;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 8px;
}

.container-one {
    background-color: aquamarine;
    padding: 2.5%;
    width: 30%;
    border-radius: 25px;
}

.profile img {
    height: 5rem;
    border-radius: 50px;
}

.link a {
    text-decoration: none;
    color: black;
    font-size: 12px;
}

.link img {
    height: 2rem;
}

.container-two {
    background-color: bisque;
    margin: 2.5%;
    width: 70%;
    border-radius: 25px;
    padding: 2.5%;
}

.about-me {
    text-align: left;

}

.logos img {
    height: 3rem;
}

.button-container {
    margin-top: 5%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.projects-button {
    background-color: #d896d8;
    margin: 5px;
    padding: 5px;
    border-radius: 15px;
}

.projects-button a {
    text-decoration: none;
    color: black;
}

@media screen and (max-width: 800px){
    .main-container{
        width: 95%;
        flex-direction: column;
    }

    .container-one{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 90%;
        margin: 2.5%;
    }

    .social-links{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .link{
        padding: 0.5rem;
    }

    .link a {
    text-decoration: none;
    color: black;
    font-size: 9px;
    }

    .link img {
        height: 1.5rem;
    }

    .container-two{
        width: 90%;
        margin: 2.5%;
    }
}
</style>