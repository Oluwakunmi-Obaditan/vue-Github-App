<template>
    <aside :class="`${is_expanded && 'is-expanded'}`">
        <div class="logo">
            <img src="../assets/logo.svg" alt="vue">
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                    <span class="material-symbols-outlined">
keyboard_double_arrow_right
</span>
            </button>
        </div>

        <h3>Menu</h3>
        <div class="menu">
            <router-link to="/" class="button">
				<span class="material-symbols-outlined">home</span>
				<span class="text">Home</span>
			</router-link>
			<router-link to="/repositories" class="button">
				<span class="material-symbols-outlined">description</span>
				<span class="text">Repo</span>
			</router-link>
           

        </div>
        </aside>
</template>

<script setup>
import {ref} from 'vue'

const is_expanded = ref(false)

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
}

</script>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    overflow: hidden;
    min-height: 100vh;
    padding: 1rem;
    background-color: var(--dark);
    color:var(--light);
    transition: 0.2s ease-out;

    .logo{
        margin-bottom: 1rem;

        img{
            width: 2rem;
        }
    }

    .menu-toggle-wrap{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
        position: relative;
        top: 0;
        transition: 0.2s ease-out;

        .menu-toggle{
            transition: 0.2s ease-out;
            .material-symbols-outlined {
                 font-size: 2rem;
                 color: var(--light);
                 transition: 0.2s ease-out;
            }
            &:hover{
                .material-symbols-outlined{
                color: var(--primary);
                transform: translateX(0.5rem);
                }
            }
        }
    }

    h3, .button.text{
        opacity:0;
        transition: 0.3s ease-out;
    }

    h3 {
		color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

    .menu{
         margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;
            transition: 0.2s ease-in-out;
            padding: 0.5rem 1rem;

            .material-symbols-outlined {
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-in-out;
                margin-right: 1rem;
            }
            .text {
                 color: var(--light);
                 transition: 0.2s ease-in-out;
            }

            &:hover, &.router-link-exact-active{
                background-color: var(--dark-alt);

                .material-symbols-outlined, .text {
                    color: var(--primary);
                }
            }

            &.router-link-exact-active{
                border-right: 5px solid var(--primary);
            }
        }
    }
    &.is-expanded {
         width:var(--sidebar-width);
        .menu-toggle-wrap{
            top: -3rem;
            .menu-toggle{
                transition: 0.2s ease-out;
                transform: rotate(-180deg);
            }
        }

        h3, .button.text{
            opacity:1;
        }

        .button{
            .material-symbols-outlined{
                margin-right: 1rem;
            }
        }
    }

    @media (max-width: 420px) {
      position: fixed;
      z-index: 99;
    }
}

</style>