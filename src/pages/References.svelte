<script>
    import Card from '../components/Card.svelte'
</script>
<div class="section bg-33 bg-screen" id="refs">
    <div class="flex justify-center">
        <div class="flex font-black gap-40 pt-7 text-6xl">
            <span class="text-blue-theme-inverse">
                References
            </span>
        </div>
    </div>
    <div class="flex justify-center text-3xl text-gray-400">
        <span>Some projects that I worked on in the past</span>
    </div>
    <div class="container gap-x-5 gap-y-4 grid md:grid-cols-3 mt-20 mx-auto">
    <Card

    technologies={["Laravel","Tailwind","Livewire"]}
    >
        <p>D3n's Ticketing system</p>
    </Card>
    <Card/>
    <Card/>
       
    </div>
</div>