<template>
<vx-card title="Nueva Asignatura" code-toggler>
    <div class="vx-col  w-full mb-base">
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Nombre</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input type="email" class="w-full" icon-pack="feather" icon-no-border v-model="input6" />
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Detalle</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input class="w-full" icon-no-border v-model="input7" />
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col sm:w-2/3 w-full ml-auto">
                <vs-button class="mr-3 mb-2">Enviar</vs-button>
                <vs-button color="danger" type="border" class="mb-2" to="/home/areas">Cancelar</vs-button>
            </div>
        </div>
    </div>
</vx-card>
</template>
