<template>
  <v-col class="pad flex flex-center">
    <div class="pad">
      <v-card class="cardColor text-center" elevation="9">
        <h1 class="flex-center splash">Timeline of my (Academic) Life</h1>
      </v-card>
      <v-divider></v-divider>
      <v-spacer></v-spacer>
      <v-timeline align-center>
        <v-timeline-item
          v-for="(item, i) in timeline"
          :key="i"
          :color="item.color"
          :icon="item.icon"
          fill-dot
        >
          <template #opposite>
            <v-card :color="item.color">
              <span color="white">{{ item.oppTxt }}</span>
            </v-card>
          </template>
          <v-card :color="item.color" dark>
            <v-card-title class="text-h6">
              {{ item.title }}
            </v-card-title>
            <v-card-text class="cardColor text--primary textCard">
              {{ item.mainTxt }}
              <nuxt-img
                v-if="item.img !== ''"
                :src="item.img"
                width="32"
                height="32"
              />
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
  </v-col>
</template>

<script>
export default {
  name: 'AboutMeTimeline',
  data() {
    return {
      timeline: [
        {
          color: 'blue lighten-2',
          icon: 'mdi-notebook',
          title: 'Building Bridges in BHR7',
          mainTxt:
            'We present the first, high resolution and high sensitivity observations of an isolated protostar from compact disk to the envelope using a plethora of kinematic tracer lines. This protostar provides the ideal conditions by which we can analyze the intricate kinematics of the various kinematic and spatial regimes of a protostar: from the compact keplerian accreting disk, to the bi-polar outflows, to the shock region of the outflows, to the instreaming material that replinishes the disk, out to the extended envelope.',
          oppTxt: 'in prep',
          img: '',
        },
        {
          color: 'red lighten-2',
          icon: 'mdi-notebook',
          title: 'Perseus Multiple Survey at <8au resolution',
          mainTxt:
            'We present a statistical characterization of circumstellar disk orientations toward 12 protostellar multiple systems in the Perseus molecular cloud using ALMA at Band 6 with a resolution of 8 au. This exquisite resolution enables us to resolve the compact inner disk structures surrounding the components of each multiple system. This enables us to determine the 3-D orientation of the disks (position angle and inclination) to high precision. We perform a statistical analysis on the relative alignment of the orientation vectors of the ensemble sample to determine if they are preferentially aligned or have a random distribution of alignments. For our sample, we can strongly rule out fully correlated only mixture models while our results tend to disfavor uncorrelated only compositions. Our results indicate that the populations of protostellar multiples at close ($<$500~au) separations are a hybrid population with contributions from disk fragmentation (producing aligned systems) and turbulent fragmentation (producing random alignments).',
          oppTxt: 'APJ 2023: in prep',
          img: '',
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-notebook',
          title: 'L1448 IRS3B',
          mainTxt:
            'We present ALMA observations toward a triple protostar system, L1448 IRS3B, at 879 μm with high resoltuion. Spiral arm structure within the circum-multiple disk is well resolved in dust continuum toward IRS3B, and we detect the known wide (∼2300 au) companion, IRS3A, also resolving possible spiral substructure. We confirm that the disks are in Keplerian rotation with fitted masses of  1.19 M⊙ for IRS3B-ab and  1.51 M⊙ for IRS3A and place an upper limit on the central protostar mass for the tertiary IRS3B-c of 0.2 M⊙. We measure the mass of the fragmenting disk of IRS3B to be ∼0.29 M⊙ from the dust continuum emission of the circum-multiple disk and estimate the mass of the clump surrounding IRS3B-c to be 0.07 M⊙. We also find that the disk around IRS3A has a mass of ∼0.04 M⊙. By analyzing the Toomre Q parameter, we find the IRS3A circumstellar disk is gravitationally stable (Q > 5), while the IRS3B disk is consistent with a gravitationally unstable disk (Q < 1) between the radii ∼200-500 au. This coincides with the location of the spiral arms and the tertiary companion IRS3B-c, supporting the hypothesis that IRS3B-c was formed in situ via fragmentation of a gravitationally unstable disk.',
          oppTxt: 'APJL 2021: 2021ApJ...907L..10R',
          img: '',
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
          title: 'Start of PhD',
          mainTxt:
            'I started my PhD adventure at the University of Oklahoma under the direction of Dr. John Tobin and Dr. Nate Kaib. My work focused on the formation of multiple protostars in the Perseus molecular cloud.',
          oppTxt: '2016-2023',
          img: '',
        },
        {
          color: 'indigo',
          icon: 'mdi-airballoon',
          title: 'BS Physics & Astronomy',
          mainTxt:
            'I earned my BS in Physics & Astronomy at Clemson Universty in South Carolina, under the direction of Dr. Sean Brittain. I focused on the ro-vibrational lines of OH towards protoplanetary disks.',
          oppTxt: '2012-2016',
          img: '',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/mixins.scss';
@import '@/assets/variables.scss';
.splash {
  @include splash;
  text-decoration: underline;
}
.highlight {
  @include highlight;
}
.bolden {
  @include bolden;
}
.cardColor {
  @include cardColor;
}
.textCard {
  overflow-y: scroll;
  max-height: 300px;
}
.text-center {
  text-align: center;
}
</style>
