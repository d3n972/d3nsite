<script>
    export let technologies=[];

</script>
<div id="card-3" class="flex">
    <div class="bg-white mx-auto rounded-3xl shadow-lg">
        <img class="mx-auto pt-3 rounded-3xl" src="https://via.placeholder.com/475x168" alt="">
        <div class="h- p-3">
            <div class="grid grid-cols-3 gap-4 mt-2">
                <div class="h-8 flex gap-2 col-span-3">
                    {#each technologies as t}
                        <span class="bg-green-200 p-1 rounded-3xl w-min">{t}</span>
                    {/each}
                </div>
                <div class="h-8 bg-gray-200 rounded animate-pulse">
                </div>
                <div class="h-8 bg-gray-200 rounded animate-pulse">
                </div>
                <div class="h-8 col-span-2 bg-gray-200 rounded animate-pulse">
                </div>
                <div class=" h-8 bg-gray-200 rounded animate-pulse">
                </div>
                <div class="col-span-3">
                    <slot></slot>
                </div>
                <div class="col-span-2 ...">
                </div>
            </div>
        </div>
    </div>

</div>