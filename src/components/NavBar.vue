<template>
    <div class="header">
        <div class="nav-menu">
            <div class="logo">
                <img class="logo-icon" src="../assets/logotype.png" alt="Logo Jannika Seybold">
            </div>
            <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
                <ul class="nav-items">
                    <RouterLink to="/" class="nav-button">Home</RouterLink>
                    <RouterLink to="/art" class="nav-button">Art</RouterLink>
                    <RouterLink to="/tech" class="nav-button">Tech</RouterLink>
                    <RouterLink to="/illustration" class="nav-button">Illustration</RouterLink>
                    <RouterLink to="/writings" class="nav-button">Writings</RouterLink>
                    <RouterLink to="/about" class="nav-button">About</RouterLink>
                </ul>
            </div>
            <i class="hamburger-icon" @click="showMenu()">
                <img class="hamburger-icon" src="../assets/hamburger-icon.png" alt="icon">
            </i>

        </div>
    </div>
</template>

<script>export default {
    watch: {
        '$route'() {
            this.showMobileMenu = false
        }
    },
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
    margin-bottom: 4rem;
    margin-top: 1rem;
}

.nav-items {
    display: flex;
    align-items: right;
    list-style: none;
    margin: 0;
    padding: 0;
    padding: 0.5rem;
    ;

    .nav-button {
        margin: 3rem;
        border-radius: 10px;
        text-align: center;
        text-decoration: none;
        color: black;
        font-size: 2.2rem;
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
    padding-top: 1.5%;
    padding-left: 1.5%;
}

.logo-icon {
    width: 100%;
}

// Mobile version - hidden hamburger menu@media screen and (max-width: 768px)

@media screen and (max-width: 1250px) {
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
        margin-top: 15%;
        width: 100%;
    }

    .nav-items {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 10px;
    }

    i {
        display: block;
        text-align: right;
        padding: 0 10px 10px 0;
        size: 10%;
    }

    .logo {
        width: 60%;
    }

    .logo-icon {
        margin: 1rem;
        width: 110%;
    }

    i.hamburger-icon {
        width: 50%;
    }


}
</style>