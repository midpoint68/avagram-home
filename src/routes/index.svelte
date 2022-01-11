<!-- Title -->
<svelte:head><title>Avagram</title></svelte:head>

<!-- Header -->
<div id="header-container">
    <section id="header">
        <img id="title" src="/img/logo_64h.png" alt="AVAGRAM" />
    </section>
</div>

<!-- Stamp -->
<div id="stamp-container">
    <img id="stamp" src="/img/avg_stamp.png" alt="AVG Stamp" />
</div>

<!-- Intro -->
<main>
    <section id="intro">
        <h1>What is Avagram?</h1>
        <p>
            Avagram brings NFT postcards to the Avalanche Network! We are
            currently testing the features of Avagram on the Avalanche testnet
            and plan on launching to mainnet in 2022 Q1.
        </p>
        <h2><a href="https://test.avagram.io/">Try it out now!</a></h2>
        <p>
            You can try all of Avagrams current features on the testnet
            deployment! Don't forget to stop by our <a
                href="https://discord.gg/v5huGZjkBp">Discord Community</a
            > if you have any questions or suggestions for the platform.
        </p>
    </section>
</main>

<!-- Footer -->
<footer>
    <p>
        <a href="https://discord.gg/v5huGZjkBp">Discord</a> ❤
        <a href="https://twitter.com/Avagram_io">Twitter</a>
    </p>
</footer>

<style>
    section {
        box-sizing: border-box;
        max-width: 1024px;
        margin: 1rem auto;
    }

    #header-container {
        background-color: var(--pure-white);
        z-index: 2;
    }
    #header {
        text-align: center;
        position: relative;
        padding: 1rem;
    }
    #title {
        display: inline-block;
        margin: 1rem;
        max-width: 50%;
        z-index: 2;
    }

    #stamp-container {
        text-align: center;
    }
    #stamp {
        max-width: 50vmin;
        margin: 2rem;
    }

    main {
        flex-grow: 1;
        background-color: var(--pure-white);
    }

    footer {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        padding: 40px;
        background-color: var(--pure-white);
        font-size: medium;
    }

    footer * {
        color: var(--text-color) !important;
    }

    @media (min-width: 480px) {
        footer {
            padding: 40px 0;
        }
    }

    @media (max-width: 900px) {
        #header {
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-evenly;
            align-items: center;
            padding: 0;
        }
    }
</style>
