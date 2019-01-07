<template id="suprimento-list">
    <div class="row">
        <div class="pull-right">
            <router-link class="btn btn-xe btn-primary">
                <span class="glyphicon glyphicon-plus"></span>
                Adicione outro item
            </router-link>
            <br /><br />
        </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Descrição</th>
                    <th>Quantidade</th>
                    <th>Observação</th>
                    <th>Criado por/em</th>
                    <th>Atualizado por/em</th>
                    <th class="col-md-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(suprimento, index) in filteredSuprimentos">
                    <td>{{ index + 1}}</td>
                    <td>{{ suprimento.desc }}</td>
                    <td>{{ suprimento.qtde }}</td>
                    <td>{{ suprimento.obs }}</td>
                    <td>{{ suprimento.name }}</td>
                    <td>{{ suprimento.name_up }}</td>
                    <td>
                        <router-link class="btn btn-info btn-xs" v-bind:to="{name: 'Viewsuprimentos', params: {id: suprimento.id}}">Show</router-link>            
                        <router-link class="btn btn-warning btn-xs" v-bind:to="{name: 'Editsuprimentos', params: {id: suprimento.id}}">Edit</router-link>

                        <router-link class="btn btn-danger btn-xs" v-bind:to="{name: 'Deletesuprimentos', params: {id: suprimento.id}}">Delete</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {};
</script>

<style lang="css ">
</style>

