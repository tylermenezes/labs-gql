---
to: "{{ mentor.email }}"
{{#if mentor.managerUsername }}cc: "{{ mentor.managerUsername }}@codeday.org"{{/if}}
from: "labs@codeday.org"
subject: "Your Mentees - {{ join (mapToKey project.students 'givenName') ', ' }}"
---

Hi {{ mentor.givenName }}, we're excited to say we've found you matches for the following project description:

<blockquote>{{ project.description }}</blockquote>

## Your Mentees

{{#each project.students}}
#### {{ this.givenName }} {{ this.surname }}

- **Email:** {{ this.email }}
- **Mentorship weeks:** {{ add this.weeks -1 }}
{{#when this.weeks gt 6}}- **(Needs to meet for an extra {{ add this.weeks -6}} weeks for school credit.)**{{/when}}
{{#each this.profile}}- **{{ prettyCamel @key }}:** {{ this }}{{/each}}
{{/each}}


<div>
<div style="color: #484848;">--<br />The CodeDay Labs Team</div>
<div><br /><img src="https://f1.codeday.org/logo.png" /><a style="color: #bdbdbd; text-decoration: none;" href="https://www.youtube.com/watch?v=GKNBurEnGow" target="_blank" rel="noopener noreferrer"><br />There's a place in tech for everyone.</a><a style="color: #bdbdbd; text-decoration: none;" href="https://www.youtube.com/watch?v=GKNBurEnGow" target="_blank" rel="noopener noreferrer"><br /></a></div>
</div>