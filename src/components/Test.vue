<template>
    <div>
        
    </div>
</template>

<script>
export default {
    mounted(){
        this.$bvModal.msgBoxOk('Data was submitted successfully', {
            title: 'Confirmation',
            size: 'lg',
            buttonSize: 'lg',
            okVariant: 'success',
            headerClass: 'p-2 border-bottom-0',
            footerClass: 'p-2 border-top-0',
            centered: true
        }).then(value => {
            alert("hi");
            this.boxTwo = value
        }).catch(err => {
            // An error occurred
        })
      
    }
}
</script>