import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { BehaviorSubject, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IslandDisplay } from '../../shared/models/island-display.enum';
import { WorkComponent } from "../../work/work/work.component";
import { WorkNavigatorComponent } from '../work-navigator/work-navigator.component';
import { Work } from '../../shared/models/work.model';

@Component({
    selector: 'popo-island',
    standalone: true,
    templateUrl: './island.component.html',
    styleUrl: './island.component.scss',
    imports: [
        CommonModule,
        MenuComponent,
        WorkNavigatorComponent,
    ]
})
export class IslandComponent implements OnInit {
  display$: BehaviorSubject<string> = new BehaviorSubject('menu');

  work: Work = {
		metadata: {
			id: '1',
			title: 'Work 1',
			authors: [],
			tags: [],
		},
		contents: {
			chapters: [
				{
					title: 'The Boy Who Lived',
					text: `
          Mr and Mrs Dursley, of number four, Privet Drive, were proud to
          say that they were perfectly normal, thank you very much. They
          were the last people you’d expect to be involved in anything
          strange or mysterious, because they just didn’t hold with such
          nonsense.
          Mr Dursley was the director of a firm called Grunnings, which
          made drills. He was a big, beefy man with hardly any neck,
          although he did have a very large moustache. Mrs Dursley was
          thin and blonde and had nearly twice the usual amount of neck,
          which came in very useful as she spent so much of her time craning
          over garden fences, spying on the neighbours. The Dursleys had a
          small son called Dudley and in their opinion there was no finer
          boy anywhere.
          The Dursleys had everything they wanted, but they also had a
          secret, and their greatest fear was that somebody would discover
          it. They didn’t think they could bear it if anyone found out about
          the Potters. Mrs Potter was Mrs Dursley’s sister, but they hadn’t
          met for several years; in fact, Mrs Dursley pretended she didn’t
          have a sister, because her sister and her good-for-nothing husband
          were as unDursleyish as it was possible to be. The Dursleys
          shuddered to think what the neighbours would say if the Potters
          arrived in the street. The Dursleys knew that the Potters had a
          small son, too, but they had never even seen him. This boy was
          another good reason for keeping the Potters away; they didn’t
          want Dudley mixing with a child like that.
          When Mr and Mrs Dursley woke up on the dull, grey Tuesday
          our story starts, there was nothing about the cloudy sky outside to
          suggest that strange and mysterious things would soon be happening all over the country. Mr Dursley hummed as he picked out
          his most boring tie for work and Mrs Dursley gossiped away 
          8 HARRY POTTER
          happily as she wrestled a screaming Dudley into his high chair.
          None of them noticed a large tawny owl flutter past the window.
          At half past eight, Mr Dursley picked up his briefcase, pecked
          Mrs Dursley on the cheek and tried to kiss Dudley goodbye but
          missed, because Dudley was now having a tantrum and throwing
          his cereal at the walls. ‘Little tyke,’ chortled Mr Dursley as he left
          the house. He got into his car and backed out of number four’s
          drive. `
				},
				{
					title: `The Vanishing Glass`,
					text: `
					The Vanishing Glass
Nearly ten years had passed since the Dursleys had woken up to
find their nephew on the front step, but Privet Drive had hardly
changed at all. The sun rose on the same tidy front gardens and lit
up the brass number four on the Dursleys’ front door; it crept into
their living-room, which was almost exactly the same as it had
been on the night when Mr Dursley had seen that fateful news
report about the owls. Only the photographs on the mantelpiece
really showed how much time had passed. Ten years ago, there
had been lots of pictures of what looked like a large pink beach
ball wearing different-coloured bobble hats – but Dudley Dursley
was no longer a baby, and now the photographs showed a large,
blond boy riding his first bicycle, on a roundabout at the fair,
playing a computer game with his father, being hugged and kissed
by his mother. The room held no sign at all that another boy lived
in the house, too.
Yet Harry Potter was still there, asleep at the moment, but not
for long. His Aunt Petunia was awake and it was her shrill voice
which made the first noise of the day.
‘Up! Get up! Now!’
Harry woke with a start. His aunt rapped on the door again.
‘Up!’ she screeched. Harry heard her walking towards the
kitchen and then the sound of the frying pan being put on the
cooker. He rolled on to his back and tried to remember the dream
he had been having. It had been a good one. There had been a
flying motorbike in it. He had a funny feeling he’d had the same
dream before.
His aunt was back outside the door.
‘Are you up yet?’ she demanded.
‘Nearly,’ said Harry.
‘Well, get a move on, I want you to look after the bacon. And 
20 HARRY POTTER
don’t you dare let it burn, I want everything perfect on Duddy’s
birthday.’
Harry groaned.
‘What did you say?’ his aunt snapped through the door.
‘Nothing, nothing ...’
Dudley’s birthday – how could he have forgotten? Harry got
slowly out of bed and started looking for socks. He found a pair
under his bed and, after pulling a spider off one of them, put them
on. Harry was used to spiders, because the cupboard under the
stairs was full of them, and that was where he slept. `
				},
			],
		},

	}

  ngOnInit(): void {
    this.display$.next('work');
  }
}
