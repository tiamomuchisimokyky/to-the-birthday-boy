const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const glow = $('.cursor-glow');
document.addEventListener('mousemove', (event) => {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const musicBtn = $('#musicBtn');
musicBtn?.addEventListener('click', () => {
  musicBtn.classList.toggle('playing');
  musicBtn.textContent = musicBtn.classList.contains('playing') ? '♫' : '♪';
});

const birthdayDate = new Date('2027-05-24T00:00:00').getTime();
function updateCountdown() {
  const countdown = $('#countdown');
  if (!countdown) return;

  const difference = Math.max(birthdayDate - Date.now(), 0);
  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference % 86400000) / 3600000);
  const minutes = Math.floor((difference % 3600000) / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);

  $('#days').textContent = String(days).padStart(2, '0');
  $('#hours').textContent = String(hours).padStart(2, '0');
  $('#mins').textContent = String(minutes).padStart(2, '0');
  $('#secs').textContent = String(seconds).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

const reasons = [
  'Your smile feels like sunshine.',
  'You make people feel safe.',
  'Your laugh is unforgettable.',
  'You turn simple days into stories.',
  'You care deeply.',
  'Your vibe is soft and magical.',
  'You are beautifully genuine.',
  'You make memories feel golden.',
  'Your heart is rare.',
  'You are my favorite person to annoy.',
  'You are aura farming without trying lol.',
  'You make everything better.',
  'You listen like home.',
  'You are effortlessly classy.',
  'You deserve the prettiest life.',
  'You are a whole comfort place.',
  'Your presence feels peaceful.',
  'You are pure main character energy.',
  'You make friendship feel precious.',
  'You are loved more than words.',
  'You bring calm into chaos.',
  'You make every photo feel special.',
  'You have the cutest little habits.',
  'You make boring days memorable.',
  'You are gentle but strong.',
  'Your friendship feels like a blessing.',
  'You understand things without words.',
  'You make silence feel comfortable.',
  'You are a walking soft glow.',
  'You make people believe in kindness.',
  'You are so easy to love.',
  'You make celebrations feel brighter.',
  'You carry warmth wherever you go.',
  'You make tiny moments feel cinematic.',
  'You have a beautiful soul.',
  'You make me laugh at random times.',
  'You are honest in the sweetest way.',
  'You are my comfort notification.',
  'You make the world less heavy.',
  'You deserve flowers every day.',
  'You make love feel simple.',
  'You are soft, rare, and precious.',
  'You make every plan more exciting.',
  'You are naturally elegant.',
  'You care even when nobody notices.',
  'You are full of pretty energy.',
  'You make friendship feel magical.',
  'You are the reason behind many smiles.',
  'You make ordinary chats memorable.',
  'You are a safe place.',
  'You look beautiful being yourself.',
  'You make every goodbye feel hard.',
  'You are thoughtful in little ways.',
  'You make life feel warmer.',
  'You are my favorite kind of person.',
  'You make memories worth saving.',
  'You are sunshine with a little drama.',
  'You make birthdays feel meaningful.',
  'You are a beautiful chapter.',
  'You make every corner feel like home.',
  'You are cute without even trying.',
  'You have the purest heart.',
  'You make people feel noticed.',
  'You bring sparkle into simple things.',
  'You are love in human form.',
  'You make every story better.',
  'You are someone I am grateful for.',
  'You make emotions feel safe.',
  'You have a rare kind of grace.',
  'You make the day softer.',
  'You are a forever kind of friend.',
  'You make everyone around you happier.',
  'You are pure golden-hour energy.',
  'You make small surprises feel huge.',
  'You are beautifully dramatic sometimes.',
  'You make life feel like a cute vlog.',
  'You are my favorite memory keeper.',
  'You make even chaos look pretty.',
  'You are special in every season.',
  'You make me proud to know you.',
  'You carry love in your details.',
  'You make every laugh feel louder.',
  'You are a little universe of warmth.',
  'You make everything feel less lonely.',
  'You are rare, real, and radiant.',
  'You make wishes feel possible.',
  'You are the prettiest comfort zone.',
  'You make every message feel sweet.',
  'You turn moments into keepsakes.',
  'You are always worth celebrating.',
  'You make kindness look beautiful.',
  'You are a blessing in soft colors.',
  'You make every page of life beautiful.',
  'You are deeply loved.',
  'You make my heart smile.',
  'You deserve all the magic.',
  'You make today feel golden.',
  'You are unforgettable.',
  'You are my favorite birthday boy.',
  'You are more loved than 100 reasons can say.'
];

const reasonGrid = $('#reasonGrid');
if (reasonGrid) {
  const imageFolder = reasonGrid.dataset.imageFolder || 'assets';
  const reasonImages = Array.from({ length: 100 }, (_, index) => `${imageFolder}/${index + 1}.jpg`);

  reasonGrid.innerHTML = reasons
    .map((reason, index) => {
      const image = reasonImages[index % reasonImages.length];
      return `
      <article class="reason-card reveal" tabindex="0">
        <div class="reason-inner">
          <div class="reason-front">
            <h3>${index + 1}</h3>
            <p>tap love note</p>
          </div>
          <div class="reason-back" style="background-image: linear-gradient(to bottom, rgba(62,50,50,.08), rgba(62,50,50,.18) 45%, rgba(62,50,50,.78)), url('${image}');">
            <p>${reason}</p>
          </div>
        </div>
      </article>`;
    })
    .join('');
}

$('#randomReasonBtn')?.addEventListener('click', () => {
  $('#randomReason').textContent = reasons[Math.floor(Math.random() * reasons.length)];
});

const envelope = $('#envelope');
const letterText = `happy birthday, my honeybee.

i honestly don't even know where to begin because there are so many things i want to say to you. i've been thinking about this day for a while now, wondering how i could put everything i feel into words, but no matter how much i write, i don't think it'll ever be enough to explain just how much you mean to me.

first of all, thank you for being born. thank you for existing. i know that sounds simple, but i truly mean it. if you had never existed, i would've never met the person who made my days brighter, who became my comfort after long and tiring days, who made distance feel a little less lonely, and who gave me a love i never knew i needed.
you know, sometimes i still can't believe that out of billions of people in this world, somehow we found each other. we started as strangers, and now you're the first person i want to tell everything to. you're the person i want to celebrate, cry with, laugh with, annoy, and spend my ordinary days with. you became my safe place without even realizing it.

thank you for staying with me through every version of me. the happy me, the quiet me, the overthinking me, the emotional me, and even the difficult me. i know i'm not always easy to understand, and i know i can overthink a lot, but you still stayed. that means more to me than you'll ever know. i know we aren't perfect. we've had misunderstandings, moments where we hurt each other without meaning to, days when distance felt heavier than usual, and times when we both wished we could just be together instead of staring at our screens. but despite everything, i still choose you. every single day, i choose you. and if i had to do it all over again, i'd still choose you.

i wish i could celebrate your birthday beside you. i wish i could surprise you with your favorite food, watch you smile when you open your gifts, steal some of your cake, take pictures together, and end the day with the biggest hug. maybe we can't do those things today, but i promise i'll keep dreaming about the day we finally can. as you turn another year older, i hope you never stop believing in yourself. i hope you continue chasing every dream you've told me about, even the ones you're scared of. i hope this year gives you more reasons to smile than to cry, more victories than disappointments, and more peace than worries. i hope you stay healthy, safe, and surrounded by people who genuinely love you. please don't be too hard on yourself whenever life gets overwhelming. it's okay to get tired. it's okay to rest. you don't always have to carry everything by yourself. i hope you remember that no matter what happens, you'll always have me. i'll always be here to cheer you on, remind you how amazing you are, and believe in you even on the days you forget how capable you are.

thank you for every late-night call, every random conversation, every laugh we shared, every "good morning" and "good night," every game we played together,every little memory we've created. they may seem small, but they've become some of my favorite moments because they were with you.
you make me feel loved in ways you probably don't even notice. you make ordinary days feel special just by being there. even when we're doing absolutely nothing, somehow it still feels like enough because it's with you.

i know i don't always say it, but i'm so proud of you. i'm proud of how far you've come, how much you've grown, and how hard you keep trying even when things aren't easy. i hope you give yourself more credit because you deserve it.

my birthday wish for you is simple: i hope you find happiness in everything you do. i hope your heart stays soft despite everything life throws at you. i hope your dreams slowly become your reality, and i hope one day we'll look back at these years of waiting and smile because we finally made it. until then, let's keep growing together. let's keep choosing each other. let's keep making memories, no matter how far apart we are.

thank you for loving me, for being patient with me, for making me feel safe, and for becoming one of the biggest blessings in my life. i love you more than you'll probably ever realize, and i hope you never forget how special you are—not just today, but every single day.

happy birthday again, my baby.

may this new chapter of your life be filled with happiness, good health, endless blessings, answered prayers, exciting opportunities, and beautiful moments that make you smile. i can't wait to celebrate many more birthdays with you in the future, hopefully side by side instead of miles apart.

always remember that no matter where life takes us, you'll always have a special place in my heart.

i love you endlessly.

forever yours,

diana`;
let hasTypedLetter = false;

envelope?.addEventListener('click', () => {
  envelope.classList.add('open');
  if (hasTypedLetter) return;

  hasTypedLetter = true;
  let index = 0;
  const typedLetter = $('#typedLetter');
  const typing = setInterval(() => {
    typedLetter.textContent += letterText[index] || '';
    index += 1;
    if (index > letterText.length) clearInterval(typing);
  }, 35);
});

const cake = $('#birthdayCake') || $('.cake');
const cutCakeBtn = $('.cut-cake-btn');
const cakeStageText = $('#cakeStageText');
let cakeAnimationStarted = false;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

cutCakeBtn?.addEventListener('click', async () => {
  if (!cake || cakeAnimationStarted) return;

  cakeAnimationStarted = true;
  cutCakeBtn.disabled = true;

  cakeStageText.textContent = 'blowing the candles... ';
  cutCakeBtn.textContent = 'blowing Candles...';
  cake.classList.add('blow');
  await wait(1500);

  cakeStageText.textContent = ' cake is cutting ';
  cutCakeBtn.textContent = '';
  cake.classList.add('knife-in');
  await wait(1200);

  cakeStageText.textContent = ' into a slice... 🍰';
  cutCakeBtn.textContent = 'cutting Slice...';
  cake.classList.add('sliced');
  await wait(900);

  cakeStageText.textContent = 'first slice for my sweetiepiee ₍₍⚞(⸝⸝>⸝⸝<⸝⸝)⚟⁾⁾ ';
  cutCakeBtn.textContent = 'CAKE CUTT, YIPEEE !!';

  if (typeof confetti === 'function') {
    confetti({ particleCount: 280, spread: 115, origin: { y: 0.62 } });
  }
});


// ===== Poem Typewriter =====
const poemBtn = $('#poemBtn');
const poem = $('#poem');

const poemText = `whilom,
i found no reason
to believe
that love
would ever be kind.

i was convinced
it merely existed
to teach hearts
how to ache,
and how to leave.

then,
there was you.

an unforeseen solace
that quietly
found its way
into every corner
of my life.

you never asked
to mend
what had long been broken,

yet somehow,
you did.

honeybee,

you've become
the comfort
i never sought,
yet now
cannot imagine
living without.

though cruel distance
continues
to test us,
it has only taught me
that devotion
is not measured
by how near
one stands,

but by
how steadfast
one remains.

here's to hopin'

that one day,
our good mornings
need no longer
be sent through a screen,

that every longing
shall find its end,

and that
i may finally
call your hand
my home.

until then,

i shall cherish you
from every mile
that separates us,

for none
could ever alter
the quiet certainty

that my heart
was always
meant for you.`; 

let poemTyped = false;

if (poemBtn && poem) {
  poem.style.whiteSpace = 'pre-line';
  poem.textContent = '';

  poemBtn.addEventListener('click', () => {
    if (poemTyped) return;

    poemTyped = true;
    let i = 0;

    const typing = setInterval(() => {
      poem.textContent += poemText[i] || '';
      i++;

      if (i > poemText.length) {
        clearInterval(typing);
        poemBtn.style.display = 'none';
      }
    }, 35);
  });
}
