 <template>
  <div class="pa-10 bg-black d-flex">

    <div>
      <h4>{{ t("about.title") }}</h4>
      <p>{{ t("about.aboutme") }}</p>
    </div>
    
    <div>
      <v-img :src="AboutImage" :width="400"></v-img>
    </div>
  </div>
</template>

<script setup>
import { AboutImage } from "../assets";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>