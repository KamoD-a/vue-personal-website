<template>
    <div class="main-container">
        <div class="project-card" v-for="(items, index) in projectData.ProjectsArray" v-bind:key="items">

                <img :src="projectData.ProjectsArray[index].Image" alt="">
                <h2>{{ projectData.ProjectsArray[index].Title }}</h2>
                <p>{{ projectData.ProjectsArray[index].About }}</p>
                <a :href="projectData.ProjectsArray[index].Link"></a>
        </div>
    </div>
</template>

<script>
import jsonData from "/projects.json"
export default {
    data() {
        return {
            projectData: jsonData
        }
    }
}
</script>


<style scoped>

.main-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2%;
    }

.project-card {
    margin: 1%;;
    flex-wrap: 0 0 40%;
    background-color: aquamarine;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 8px;
    padding: 15px;
}

.project-card img{
    height: 5rem;
}
</style>