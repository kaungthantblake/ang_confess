import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'please_answer';

  waiting  = 'assets/images/WatingCat.gif' ;


  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    const wrapper = this.el.nativeElement.querySelector('.wrapper');
    const question = this.el.nativeElement.querySelector('.question');
    const gif = this.el.nativeElement.querySelector('.gif');
    const yesBtn = this.el.nativeElement.querySelector('.yes-btn');
    const noBtn = this.el.nativeElement.querySelector('.no-btn');

    if (yesBtn) {
      this.renderer.listen(yesBtn, 'click', () => {
        if (question) question.innerHTML = 'Awww i like you too';
        if (gif) gif.src = 'assets/images/yaeee.gif';
      });
    }

    if (noBtn) {
      this.renderer.listen(noBtn, 'mouseover', () => {
        const noBtnRect = noBtn.getBoundingClientRect();
        const maxX = window.innerWidth - noBtnRect.width;
        const maxY = window.innerHeight - noBtnRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
      });
    }
  }
}
