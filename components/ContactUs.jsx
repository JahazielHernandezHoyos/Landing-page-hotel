import React from "react"
import Image from 'next/image'

const ContactUs = () => {
  return (
      <>
    <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_960_720.jpg" class="d-block mx-lg-auto img-fluid" alt="Restaurante" width="800" height="600" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="lh-1 mb-3">Contactanos</h1>
        <p class="lead">Phasellus gravida neque eu metus ultricies, sit amet pulvinar enim laoreet. Donec a fringilla erat. Nunc pretium in dolor ac tincidunt. Maecenas lobortis nulla id tellus vulputate molestie. Sed eget gravida elit. Suspendisse ac tincidunt neque, vel placerat turpis.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-outline-success btn-lg px-4 me-md-2">Contactar</button>
          {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">R</button> */}
        </div>
      </div>
    </div>
  </div>
  <div class="text-center">
  <a href="https://www.google.com/maps/place/Pamplona,+Navarra,+Espa%C3%B1a/@42.816705,-1.6780888,13z/data=!4m5!3m4!1s0xd50928ba31965c7:0x4e6e903632cb2e90!8m2!3d42.812526!4d-1.6457745?hl=es-419"><Image src='/images/ubicacion.png' class="rounded mx-auto d-block img-fluid" alt="Restaurante" width="913" height="491" loading="lazy"/></a>
  </div>
  </>
  )
}

export default ContactUs