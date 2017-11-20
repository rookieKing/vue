<template>
  <Upload :action="uploadAction">
    <Button type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>
  </Upload>
</template>
<script>
export default {
  data() {
    return {
      'uploadAction': 'server/file-upload'
    }
  }
};
</script>
