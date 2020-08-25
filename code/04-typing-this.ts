const elem = document.querySelector('.click') as HTMLInputElement

function handleClick(this: HTMLAnchorElement, event: Event) {
  event.preventDefault();
  console.log(this.className);
}

elem.addEventListener('click', handleClick, false);
