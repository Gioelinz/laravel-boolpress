<template>
  <section id="about">
    <div class="text-center mt-5 container">
      <h2>Contact Us</h2>
      <Loader v-if="isLoading" />
      <div v-else>
        <Alert
          v-if="hasErrors || successAlert"
          :type="hasErrors ? 'danger' : 'success'"
        >
          <div v-if="successAlert">{{ successAlert }}</div>
          <ul v-if="hasErrors">
            <li v-for="(error, key) in errors" :key="key">
              {{ error }}
            </li>
          </ul>
        </Alert>
        <!--# FORM -->
        <div class="form-container mx-auto">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model.trim="form.email"
              id="email"
              type="email"
              class="form-control"
              :class="{
                'is-invalid': email.isInvalid,
                'is-loading': email.loading,
                'is-valid': email.isValid,
              }"
              @keyup="liveValidateMail()"
            />
            <small class="form-text text-muted">Inserisci la tua mail</small>
          </div>
          <div class="form-group">
            <label for="message">Messaggio</label>
            <textarea
              v-model.trim="form.message"
              class="form-control"
              :class="{
                'is-invalid': message.isInvalid,
                'is-loading': message.loading,
                'is-valid': message.isValid,
              }"
              @keyup="liveValidateMessage()"
              v-click-outside="refreshMessage"
              id="message"
              rows="8"
            ></textarea>
            <small class="form-text text-muted"
              >Inserisci il tuo messaggio</small
            >
          </div>
          <button @click="sendForm()" class="btn btn-success px-4">
            INVIA
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Loader from "../Loader.vue";
import Alert from "../Alert.vue";

import { isEmpty } from "lodash";
export default {
  name: "Contact",
  components: {
    Loader,
    Alert,
  },
  data() {
    return {
      form: {
        email: "",
        message: "",
      },
      successAlert: null,
      isLoading: false,
      email: {
        loading: false,
        isValid: false,
        isInvalid: false,
        formTimeout: "",
      },
      message: {
        loading: false,
        isValid: false,
        isInvalid: false,
        formTimeout: "",
      },
      errors: {},
      match:
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    };
  },
  computed: {
    hasErrors() {
      return !isEmpty(this.errors);
    },
  },
  methods: {
    //metodo per il click fuori dalla text area
    refreshMessage() {
      this.message.isInvalid = false;
    },

    liveValidateMail() {
      //reset timeout
      clearTimeout(this.email.formTimeout);
      this.email.isInvalid = false;
      this.email.isValid = false;
      this.email.loading = true;

      //Inizia il timeout
      this.email.formTimeout = setTimeout(() => {
        if (this.form.email && !this.form.email.match(this.match)) {
          this.email.isInvalid = true;
          this.email.loading = false;
        } else if (!this.form.email) {
          this.email.loading = false;
          this.email.isInvalid = true;
        } else {
          this.email.loading = false;
          this.email.isValid = true;
        }
      }, 1500);
    },

    liveValidateMessage() {
      //reset timeout
      clearTimeout(this.message.formTimeout);

      this.message.isInvalid = false;
      this.message.isValid = false;
      this.message.loading = true;

      //Inizia il timeout
      this.message.formTimeout = setTimeout(() => {
        if (!this.form.message) {
          this.message.isInvalid = true;
          this.message.loading = false;
        } else {
          this.message.loading = false;
          this.message.isValid = true;
        }
      }, 1500);
    },

    validateForm() {
      this.successAlert = "";
      const errors = {};
      if (!this.form.email) errors.email = "La Mail è obbligatoria";
      if (!this.form.message)
        errors.message = "Il testo del messaggio è obbligatorio";

      if (this.form.email && !this.form.email.match(this.match)) {
        errors.email = "La mail non è valida";
      }

      this.errors = errors;
    },

    sendForm() {
      //Validation
      this.validateForm();

      if (!this.hasErrors) {
        this.email.isValid = false;
        this.message.isValid = false;
        this.isLoading = true;
        axios
          .post("http://localhost:8000/api/sendmail", this.form)
          .then((res) => {
            this.form.email = "";
            this.form.message = "";
            this.successAlert = "Messaggio inviato con successo";
          })
          .catch((err) => {
            console.error(err);
            this.errors = { error: "Si è verificato un errore" };
          })
          .then(() => {
            this.isLoading = false;
          });
      }
    },
  },
};
</script>

<style>
</style>