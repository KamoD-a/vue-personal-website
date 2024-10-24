<template>
    <div class="header">
        <div class="nav-menu">
            <div class="logo">
                <img class="logo-icon" src="../assets/logotype.png" alt="Logo Jannika Seybold">
            </div>
            <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
                <ul class="nav-items">
                    <RouterLink to="/" class="nav-button" @click="goToHome">Home</RouterLink>
                    <RouterLink to="/art" class="nav-button" @click="goToArt">Art</RouterLink>
                    <RouterLink to="/tech" class="nav-button" @click="goToTech">Tech</RouterLink>
                    <RouterLink to="/illustration" class="nav-button" @click="goToIllustration">Illustration</RouterLink>
                    <RouterLink to="/writings" class="nav-button" @click="goToWriting">Writings</RouterLink>
                    <RouterLink to="/about" class="nav-button" @click="goToAbout">About</RouterLink>
                </ul>
            </div>
            <i class="fas fa-bars" @click="showMenu()">
                <!--<img class="hamburger-icon" src="../assets/hamburger-icon.png" alt="icon">-->
            </i>

        </div>
    </div>
</template>

<script>export default {
    data() {
        return {
            showMobileMenu: false,
        };
    }, methods: {
        showMenu() {
            this.showMobileMenu = !this.showMobileMenu;
        },
    },
};</script>

<style lang="scss" scoped>
.nav-menu {
    background-color: white;
    display: flex;
    padding: 1%;
}

.nav-content {
    display: flex;
    justify-content: right;
    padding: 20px 30px;
    width: 80%;
}

.nav-items {
    display: flex;
    align-items: right;
    list-style: none;
    margin: 0;
    padding: 0;
    ;

    .nav-button {
        padding: 5px;
        margin: 5px;
        border-radius: 10px;
        text-align: center;
        text-decoration: none;
        color: black;
    }

    .nav-button:hover {
        background-color: rgb(178, 190, 190);
    }
}

i {
    display: none;
}

.logo {
    width: 32%;
    align-items: center;
    justify-items: center;
}

.logo-icon {
    width: 100%;
}

// Mobile version - hidden hamburger menu@media screen and (max-width: 768px)

@media screen and (max-width: 768px) {
    .nav-menu {
        padding-top: 10px;
        position: absolute;
        width: 100%;
        display: flex;
    }

    .open-menu {
        opacity: 1;
        height: 150px;
    }

    .closed-menu {
        opacity: 0;
        height: 0;
        padding: 0;
    }

    .nav-content {
        flex-direction: column;
        z-index: 100;
        position: absolute;
        transition: all 0.2s ease-out;
        margin-top: 10%;
        width: 100%;
    }

    .nav-items {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgb(222, 222, 222);
        border-radius: 10px;
    }

    i {
        display: block;
        text-align: right;
        padding: 0 10px 10px 0;
    }

    .logo {
        width: 50%;
    }

    .logo-icon {
        width: 100%;
    }

    .hamburger-icon {
        width: 20%;
    }

    i.fas.fa-bars {
        width: 50%;
    }
}
</style>