<template>
    <footer>
        <div class="social-links">
        <a href="https://www.facebook.com/" target="_blank">
            <i class="fab fa-facebook"></i>
        </a>
        <a href="https://www.twitter.com/" target="_blank">
            <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
            <i class="fab fa-instagram"></i>
        </a>
        </div>
        <div class="logo">
        <img src="logo-blue.png" alt="Logo" />
        </div>
    </footer>
</template>

<script>

export default{
    name:'footer'
}
</script>

<style scoped>
    footer {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
}

.social-links {
    margin-bottom: 20px;
}

.social-links a {
    color: white;
    font-size: 24px;
    margin: 0 10px;
    text-decoration: none;
}

.logo img {
    width: 100px;
    height: auto;
}
</style>